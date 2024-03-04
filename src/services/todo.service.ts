import { generateId, todoList } from "../database/database";
import { TTodo, TTodoCreateBody, TTodoUpdateBody } from "../interfaces/todo.interface";

export class TodoService {
   getTodos(search?: string) {
      if (search) {
         const filteredTodos = todoList.filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
         );
         return filteredTodos;
      } else {
         return todoList;
      }
   }

   getOneTodo(todo: TTodo) {
      return todo;
   }

   create(data: TTodoCreateBody) {
      const now = new Date();

      const newTodo = {
         id: generateId(),
         title: data.title,
         content: data.content,
         createdAt: now
      };

      todoList.push(newTodo);

      return newTodo;
   }

   update(updatingId: number, data: TTodoUpdateBody) {
      const currentTodo = todoList.find((todo) => todo.id === updatingId);

      if (currentTodo) {
         const index = todoList.findIndex((todo) => todo.id === updatingId);

         const now = new Date();

         const newTodo = { ...currentTodo, ...data, updatedAt: now };

         todoList.splice(index, 1, newTodo);

         return newTodo;
      }
   }

   delete(removingId: number) {
      const index = todoList.findIndex((todo) => todo.id === removingId);

      todoList.splice(index, 1);
   }
}
