import "reflect-metadata"
import { DataSource } from "typeorm"
import { Stations } from "./entity/Stations"
import { Trips } from "./entity/Trips"
import dotenv from  "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Trips,Stations],
    migrations: [],
    subscribers: [],
})
