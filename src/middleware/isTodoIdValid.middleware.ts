import { NextFunction, Request, Response } from "express";
import { todoList } from "../database/database";

export class IsTodoIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const { todoId } = req.params;

        const existingTodo = todoList.find(todo => todo.id === Number(todoId));

        if(!existingTodo){
            return res.status(404).json({ error: "Todo not found."});
        }

        res.locals.todo = existingTodo;

        next();
    }
}