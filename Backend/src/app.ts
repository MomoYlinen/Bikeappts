import express from 'express'
import TripRoute from './Routes/TripRoute'
import StationRoute from "./Routes/StationRoute"
import ErrorHandler from "./middleware/GlobalErroHandler"
import 'express-async-errors'
import cors from 'cors'



const app = express()

app.use(cors())


app.use("/trips", TripRoute)
app.use("/stations", StationRoute)

app.use('*', ErrorHandler)


export default app