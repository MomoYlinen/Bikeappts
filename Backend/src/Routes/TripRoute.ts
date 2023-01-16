import express from "express";
import { AppDataSource } from "../data-source"
import 'reflect-metadata'
import { Trips } from "../entity/Trips";
const router = express.Router();

router.get(
  "/",(async (req, res) => {
    const TripsDB = AppDataSource.getRepository(Trips);
    try {
      const trips = await TripsDB.find();
      res.status(200).json(trips);
    }catch (err) {
      console.log(err);
    }
  })
);

router.get(
    "/:id",(async (req, res) => {})
  );

export default router;