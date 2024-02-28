import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export class IsCreateBodyDataTypeValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(typeof req.body.title !== "string" || typeof req.body.content !== "string"){
            throw new AppError("Body parameter has invalid data type.");
        }

        next();
    }
}