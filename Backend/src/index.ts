import { AppDataSource } from "./data-source"
import express from 'express'
import 'reflect-metadata'
import TripRoute from './Routes/TripRoute'
import StationRoute from "./Routes/StationRoute"

const app = express()


app.use("/trips", TripRoute)
app.use("/stations", StationRoute)


AppDataSource.initialize().then(async () => {

    app.listen(8080, ():void =>{
        console.log("server running!")
    })

}).catch(error => console.log(error))
