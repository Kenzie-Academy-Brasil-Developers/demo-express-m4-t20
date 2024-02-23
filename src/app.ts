import express, { json } from "express";
import { todoRoutes } from "./routes/todo.routes";

export const app = express();

app.use(json());

app.use("/todos", todoRoutes);

