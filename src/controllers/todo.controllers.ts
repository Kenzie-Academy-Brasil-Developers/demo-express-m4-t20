import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

export class TodoControllers {
   getTodos(req: Request, res: Response) {
      const { search } = req.query;

      const todoService = new TodoService();

      const response = todoService.getTodos(search as string);

      return res.status(200).json(response);
   }

   getOneTodo(req: Request, res: Response) {
      const { todo } = res.locals;

      const todoService = new TodoService();

      const response = todoService.getOneTodo(todo);

      return res.status(200).json(response);
   }

   create(req: Request, res: Response) {
      const todoService = new TodoService();

      const response = todoService.create(req.body);

      return res.status(201).json(response);
   }

   update(req: Request, res: Response) {
      const todoService = new TodoService();

      const { todoId } = req.params;

      const response = todoService.update(Number(todoId), req.body);

      res.status(200).json(response);
   }

   delete(req: Request, res: Response) {
      const todoService = new TodoService();

      const { todoId } = req.params;

      todoService.delete(Number(todoId));

      return res.status(204).json();
   }
}
