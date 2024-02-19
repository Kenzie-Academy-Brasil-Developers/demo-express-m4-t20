import express, { json } from "express";

// O que o Express faz?
// Permite a criação de rotas
// Oferece/levantar o servidor local

const app = express();

app.use(json());

app.get("/hello", (req, res) => {
   // Resposta é o que nós desejamos estabelecer como retorno dessa rota
   return res.status(200).json({ message: "Olá mundo!" });
});

/* Crudzinho */
interface ITodo {
   id: number;
   title: string;
   content: string;
}

let id = 1;

export const todoList: ITodo[] = [];

app.get("/todos", (req, res) => {
   return res.status(200).json(todoList);
});

app.post("/todos", (req, res) => {
   //console.log(req.body);

   const newTodo = {
      id,
      title: req.body.title,
      content: req.body.content,
   };

   //console.log(newTodo);

   todoList.push(newTodo);

   //console.log(todoList);

   id++;

   return res.status(201).json(newTodo);
});

app.delete("/todos/:todoId", (req, res) => {
   const { todoId } = req.params;

   console.log(todoId);

   const index = todoList.findIndex((todo) => todo.id === Number(todoId));

   console.log(index);

   todoList.splice(index, 1);

   console.log(todoList);

   return res.status(204).json();
});

app.listen(3000, () => {
   console.log("API successfully started");
});
