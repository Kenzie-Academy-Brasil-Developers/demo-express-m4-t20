import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controllers";
import { IsCreateBodyDefined } from "../middleware/isCreateBodyDefined.middleware";
import { IsCreateBodyDataTypeValid } from "../middleware/isCreateBodyDataTypeValid.middleware";
import { IsTodoIdValid } from "../middleware/isTodoIdValid.middleware";

export const todoRoutes = Router();

const todoControllers = new TodoControllers();

todoRoutes.get("/", todoControllers.getTodos);

todoRoutes.get("/:todoId", IsTodoIdValid.execute, todoControllers.getOneTodo);

todoRoutes.post(
   "/",
   IsCreateBodyDefined.execute,
   IsCreateBodyDataTypeValid.execute,
   todoControllers.create
);

todoRoutes.patch("/:todoId", IsTodoIdValid.execute, todoControllers.update);

todoRoutes.delete("/:todoId", IsTodoIdValid.execute, todoControllers.delete);
