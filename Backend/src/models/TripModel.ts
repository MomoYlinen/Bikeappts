import { AppDataSource } from "../data-source"
import 'reflect-metadata'
import { Trips } from "../entity/Trips";

export function getTripRepo (){
    const getRepo = AppDataSource.getRepository(Trips)
    return getRepo
}