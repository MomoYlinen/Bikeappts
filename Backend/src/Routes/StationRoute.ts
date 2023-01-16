import express from "express";
import { Stations } from "../entity/Stations";
import 'reflect-metadata'
import { AppDataSource } from "../data-source";
const router = express.Router();

router.get(
  "/",(async (req, res) => {
    const StationsDB = AppDataSource.getRepository(Stations)
    try {
      const stations = await StationsDB.find();
      res.status(200).json(stations);
    }catch (err) {
      console.log(err);
    }
  })
);

router.get(
    "/:id",(async (req, res) => {})
  );

export default router;