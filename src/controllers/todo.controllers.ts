import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

export class TodoControllers{
    getTodos(req: Request, res: Response){
        const todoService = new TodoService();

        const response = todoService.getTodos();

        res.status(200).json(response)
    }

    create(req: Request, res: Response){
        const todoService = new TodoService();

        const response = todoService.create(req.body);

        res.status(201).json(response);
    }

    delete(req: Request, res: Response){
        const todoService = new TodoService();

        const { id } = req.params;

        todoService.delete(Number(id));

        res.status(204).json();
    }
}