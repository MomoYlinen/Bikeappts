import express, {Request,Response} from "express";
import { Stations } from "../entity/Stations";
import 'reflect-metadata'
import { AppDataSource } from "../data-source";
const router = express.Router();

const StationsDB = AppDataSource.getRepository(Stations)

router.get(
  "/",(async (req, res) => {
    try {
      const stations = await StationsDB.find();
      res.status(200).json(stations);
    }catch (err) {
      console.log(err);
    }
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

export default router;