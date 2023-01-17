import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

const errorhandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
if (err  instanceof CustomError){
    return res.send({errors: err.serializeErrors()})
}
}

export default errorhandler