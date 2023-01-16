import "reflect-metadata"
import { DataSource } from "typeorm"
import { Stations } from "./entity/Stations"
import { Trips } from "./entity/Trips"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "MMolumir3",
    database: "bikeappdb",
    synchronize: false,
    logging: false,
    entities: [Trips,Stations],
    migrations: [],
    subscribers: [],
})
