import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controllers";
import { IsTodoIdValid } from "../middleware/isTodoIdValid.middleware";
import { BodyValidator } from "../middleware/bodyValidator.middleware";
import { todoCreateBodySchema, todoUpdateBodySchema } from "../schemas/todo.schemas";

export const todoRoutes = Router();

const todoControllers = new TodoControllers();

todoRoutes.get("/", todoControllers.getTodos);

todoRoutes.get("/:todoId", IsTodoIdValid.execute, todoControllers.getOneTodo);

todoRoutes.post("/", BodyValidator.execute(todoCreateBodySchema), todoControllers.create);

todoRoutes.patch(
   "/:todoId",
   BodyValidator.execute(todoUpdateBodySchema),
   IsTodoIdValid.execute,
   todoControllers.update
);

todoRoutes.delete("/:todoId", IsTodoIdValid.execute, todoControllers.delete);
