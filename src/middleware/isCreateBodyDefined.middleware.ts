import { NextFunction, Request, Response } from "express";

export class IsCreateBodyDefined{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!req.body.title || !req.body.content){
            return res.status(400).json({ error: "Body parameter not defined."});
        }

        // Leva para a próxima etapa do processo
        next();
    }
}