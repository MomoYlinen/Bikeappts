import express, {query, Request,Response} from "express";
import { Stations } from "../entity/Stations";
import {Trips} from "../entity/Trips";
import 'reflect-metadata'
import { AppDataSource } from "../data-source";
import OutBoundError from "../errors/OutBoundError";
import { QueryBuilder } from "typeorm";
const router = express.Router();

const StationsDB = AppDataSource.getRepository(Stations)
const TripsDB = AppDataSource.getRepository(Trips)

router.get(
  "/",(async (req, res) => {
    
    if (req.query.name === undefined || req.query.name === "") {
      req.query.name = "";
    }

    const builder = StationsDB.createQueryBuilder("stations").where(
      "stations.name like :name OR stations.kaupunki like :name",
      { name: `${req.query.name}%` }
    );

    const page:number = parseInt(req.query.page as any) > 1 ? parseInt(req.query.page as any) : 1
    const size:number = parseInt(req.query.size as any) >= 10 ? parseInt(req.query.size as any) : 25
    const total = await builder.getCount()

    if (Math.ceil(total / size) < page){
      throw new OutBoundError("Page not found","Page")
    }

    builder.offset((page-1) * size).limit(size)

    res.status(200).send({
      data:await builder.getMany(),
      total,
      page,
      lastpage: Math.ceil(total / size)
    })
  })
);

router.get(
    "/:id",(async (req:Request, res:Response) => {
        const stations = await StationsDB.findOne({where: {id: parseInt(req.params.id, 10)}})
        if(stations === null){
          throw new OutBoundError("Station not found","id")
        }
        res.status(200).json(stations);
    })
  );


  router.get(
    "/details/:id",(async (req:Request, res:Response) => {
      const builder = StationsDB.createQueryBuilder("stations").where("stations.id = :id", { id:`${req.params.id}%`})
      const tripBuilderDP = TripsDB.createQueryBuilder("trips").where("trips.departurestationID = :id",{ id:`${req.params.id}%`})
      const tripBuilderRT = TripsDB.createQueryBuilder("trips").where("trips.returnstationID = :id",{ id:`${req.params.id}%`})
      const topDP = tripBuilderDP
        .select("trips.returnstation", "name")
        .addSelect("COUNT(trips.returnstation)", "count")
        .groupBy("trips.returnstation")
        .orderBy("COUNT(trips.returnstation)", "DESC");
      const topRT = tripBuilderRT
        .select("trips.departurestation", "name")
        .addSelect("COUNT(trips.departurestation)", "count")
        .groupBy("trips.departurestation")
        .orderBy("COUNT(trips.departurestation)", "DESC");
      const averageDistanceStart = TripsDB.createQueryBuilder("trips").select("AVG(trips.distance)", 'Start').where("trips.departurestationID = :id",{ id:`${req.params.id}%`})
      const averageDistanceEnd = TripsDB.createQueryBuilder("trips").select("AVG(trips.distance)",'End').where("trips.returnstationID = :id",{ id:`${req.params.id}%`})

      if(await (await builder.getMany()).length === 0){
        throw new OutBoundError("No stations found","name")
      }
        res.status(200).json(
          {
            details:await builder.getOne(),
            totalTripsStarted: await tripBuilderDP.getCount(),
            totalTripsEnded: await tripBuilderRT.getCount(),
            AverageDistanceStart: await averageDistanceStart.getRawOne(),
            AverageDistanceEnd: await averageDistanceEnd.getRawOne(),
            topDepartureStations: await topDP.limit(5).getRawMany(),
            topReturnStations: await topRT.limit(5).getRawMany(),
          }


        );
    })
  );

export default router;