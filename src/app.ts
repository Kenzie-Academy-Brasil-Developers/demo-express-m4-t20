import express, { json } from "express";
import { TodoService } from "./services/todo.service";
import { TodoControllers } from "./controllers/todo.controllers";

// Controllers
// Integração com o framework 

// Services
// Regras de negócio sem influência do framework

const app = express();

app.use(json());

const todoService = new TodoControllers();

app.get("/todos", todoService.getTodos);

app.post("/todos", todoService.create);

app.delete("/todos/:todoId", todoService.delete);

app.listen(3000, () => {
   console.log("API successfully started");
});
