import express, {Request,Response} from "express";
import { AppDataSource } from "../data-source"
import 'reflect-metadata'
import { Trips } from "../entity/Trips";
import OutBoundError from "../errors/OutBoundError";
const router = express.Router();

const TripsDB = AppDataSource.getRepository(Trips);

router.get(
  "/",(async (req:Request, res:Response) => {

      if (req.query.name === undefined || req.query.name === "") {
        req.query.name = "";
      }

      const builder = TripsDB.createQueryBuilder("stations").where(
        "returnstation like :name OR departurestation like :name",
        { name: `${req.query.name}%` }
      );

    const page:number = parseInt(req.query.page as any) > 1 ? parseInt(req.query.page as any) : 1
    const size:number = parseInt(req.query.size as any) >= 10 ? parseInt(req.query.size as any) : 50
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
  "/departurestation/:id",(async (req:Request, res:Response) => {
      const builder = TripsDB.createQueryBuilder("trips").where("trips.departurestationID = :id", { id: parseInt(req.params.id) })
      if((await builder.getMany()).length === 0){
        throw new OutBoundError("Station not found","id")
      }
      const page:number = parseInt(req.query.page as any) > 1 ? parseInt(req.query.page as any) : 1
      const size:number = parseInt(req.query.size as any) >= 10 ? parseInt(req.query.size as any) : 50
      const total = await builder.getCount()

      if (Math.ceil(total / size) < page){
        throw new OutBoundError("Page not found","Page")
      }
  
      builder.offset((page-1) * size).limit(size)
  
      res.status(200).send({
        data:await builder.getRawMany(),
        total,
        page,
        lastpage: Math.ceil(total / size)
      })
  })
);

router.get("/returnstation/:id",(async (req:Request, res:Response) => {
      
    const builder = TripsDB.createQueryBuilder("trips").where("trips.returnstationID = :id", { id: parseInt(req.params.id) })
      
      if((await builder.getMany()).length === 0){
        throw new OutBoundError("Station not found","id")
      }
      const page:number = parseInt(req.query.page as any) > 1 ? parseInt(req.query.page as any) : 1
      const size:number = parseInt(req.query.size as any) > 1 ? parseInt(req.query.size as any) : 20
      const total = await builder.getCount()

      if (Math.ceil(total / size) < page){
        throw new OutBoundError("Page not found","Page")
      }
  
      builder.offset((page-1) * size).limit(size)
  
      res.status(200).send({
        data:await builder.getRawMany(),
        total,
        page,
        lastpage: Math.ceil(total / size)
      })
    }
  )
);

export default router;