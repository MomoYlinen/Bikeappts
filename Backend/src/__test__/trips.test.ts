import {AppDataSource} from '../data-source'
import supertest from 'supertest'
import express from 'express'
import TripRoute from '../Routes/TripRoute'
import StationRoute from "../Routes/StationRoute"
import ErrorHandler from "../middleware/GlobalErroHandler"
import 'express-async-errors'


let connection,server
const app = express()

beforeEach(async () => {


app.use("/trips", TripRoute)
app.use("/stations", StationRoute)

app.use('*', ErrorHandler)
connection = await AppDataSource.initialize()
server = app.listen(8080)

})

afterEach(() => {
    connection.close()
    server.close()
})

it('should work', async () => {
    const response = await supertest(app).get('./trips')
    console.log(response)
})