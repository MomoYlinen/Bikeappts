import express, {query, Request,Response} from "express";
import { Stations } from "../entity/Stations";
import 'reflect-metadata'
import { AppDataSource } from "../data-source";
import OutBoundError from "../errors/OutBoundError";
const router = express.Router();

const StationsDB = AppDataSource.getRepository(Stations)

router.get(
  "/",(async (req, res) => {
    const builder = StationsDB.createQueryBuilder("stations")

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
    "/:id",(async (req:Request, res:Response) => {
        const stations = await StationsDB.findOne({where: {id: parseInt(req.params.id, 10)}})
        if(stations === null){
          throw new OutBoundError("Station not found","id")
        }
        res.status(200).json(stations);
    })
  );

  router.get("/search/name",(async (req:Request, res:Response) => {
      const builder = StationsDB.createQueryBuilder("stations").where("stations.name like :name", { name:`${req.query.name}%`})

      if(await (await builder.getMany()).length === 0){
        throw new OutBoundError("No stations found","name")
      }
      
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

export default router;