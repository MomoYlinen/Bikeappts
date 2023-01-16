import express, {Request,Response} from "express";
import { QueryBuilder } from "typeorm";
import { AppDataSource } from "../data-source"
import 'reflect-metadata'
import { Trips } from "../entity/Trips";
const router = express.Router();

const TripsDB = AppDataSource.getRepository(Trips);

router.get(
  "/",(async (req:Request, res:Response) => {
    try {
      const trips = await TripsDB.find();
      res.status(200).json(trips);
    }catch (err) {
      console.log(err);
    }
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
      const returnstation = await TripsDB.createQueryBuilder("trips").where("trips.returnstationID = :id", { id: parseInt(req.params.id) }).limit(50).getRawMany()
      res.status(200).json(returnstation);
    }catch (err) {
      console.log(err);
    }
  })
);

export default router;