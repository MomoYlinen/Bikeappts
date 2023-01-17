import express, {query, Request,Response} from "express";
import { Stations } from "../entity/Stations";
import 'reflect-metadata'
import { AppDataSource } from "../data-source";
const router = express.Router();

const StationsDB = AppDataSource.getRepository(Stations)

router.get(
  "/",(async (req, res) => {
    const builder = StationsDB.createQueryBuilder("stations")

    const page:number = parseInt(req.query.page as any) || 1
    const size:number = parseInt(req.query.size as any) || 50
    const total = await builder.getCount()

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
      try {
        const stations = await StationsDB.findOne({where: {id: parseInt(req.params.id, 10)}})
        res.status(200).json(stations);
      }catch (err) {
        console.log(err);
      }
    })
  );

  router.get(
    "/search/name",(async (req:Request, res:Response) => {
      try {
        const stations = await StationsDB.createQueryBuilder("stations")
        .where("stations.name like :name", { name:`%${req.query.name}%`})
        .getMany();
        res.status(200).json(stations);
      }
      catch (err) {
        console.log(err);
      }
    })
  );

export default router;