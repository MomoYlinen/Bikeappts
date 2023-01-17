import { AppDataSource } from "./data-source"
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import TripRoute from './Routes/TripRoute'
import StationRoute from "./Routes/StationRoute"
import ErrorHandler from "./middleware/GlobalErroHandler"

const app = express()


AppDataSource.initialize().then(async () => {
    app.use("/trips", TripRoute)
    app.use("/stations", StationRoute)

    app.use('*', ErrorHandler)


    app.listen(8080, ():void =>{
        console.log("server running!")
    })

}).catch(error => console.log(error))
