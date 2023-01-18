import { AppDataSource } from "./data-source"
import 'express-async-errors'
import 'reflect-metadata'
import app from './app'


AppDataSource.initialize().then(async () => {
    app.listen(8080, ():void =>{
        console.log("server running!")
    })

}).catch(error => console.log(error))
