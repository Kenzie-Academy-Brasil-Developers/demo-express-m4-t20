import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export class IsCreateBodyDefined{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!req.body.title || !req.body.content){
            throw new AppError("Body parameter not defined.");
        }

        // Leva para a próxima etapa do processo
        next();
    }
}