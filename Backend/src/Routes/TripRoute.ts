import express, {Request,Response} from "express";
import { AppDataSource } from "../data-source"
import 'reflect-metadata'
import { Trips } from "../entity/Trips";
const router = express.Router();

const TripsDB = AppDataSource.getRepository(Trips);

router.get(
  "/",(async (req:Request, res:Response) => {
    const builder = TripsDB.createQueryBuilder("trips")

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
  "/departurestation/:id",(async (req:Request, res:Response) => {
    try {
      const departurestation = await TripsDB.createQueryBuilder("trips").where("trips.departurestationID = :id", { id: parseInt(req.params.id) }).limit(50).getRawMany()
      res.status(200).send(departurestation);
    }catch (err) {
      console.log(err);
    }
  })
);

router.get(
  "/returnstation/:id",(async (req:Request, res:Response) => {
    try {
      const returnstation = await TripsDB.createQueryBuilder("trips").where("trips.returnstationID = :id", { id: parseInt(req.params.id) }).getMany()
      res.status(200).json(returnstation);
    }catch (err) {
      console.log(err);
    }
  })
);

export default router;