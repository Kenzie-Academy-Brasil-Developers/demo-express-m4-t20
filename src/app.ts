import "express-async-errors";

import express, { json } from "express";
import { todoRoutes } from "./routes/todo.routes";
import { HandleErrors } from "./errors/handleErrors";
import helmet from "helmet";

export const app = express();

// Protege a aplicação de diversas vulnerabilidades.
app.use(helmet());

app.use(json());

app.use("/todos", todoRoutes);

app.use(HandleErrors.execute);

