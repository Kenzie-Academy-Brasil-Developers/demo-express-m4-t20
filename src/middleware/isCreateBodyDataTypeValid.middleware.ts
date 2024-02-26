import { NextFunction, Request, Response } from "express";

export class IsCreateBodyDataTypeValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(typeof req.body.title !== "string" || typeof req.body.content !== "string"){
            return res.status(400).json({ error: "Body parameter has invalid data type."});
        }

        next();
    }
}