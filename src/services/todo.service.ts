import { generateId, todoList } from "../database/database";
import { ITodo, TCreateTodoBody, TUpdateTodoBody } from "../interfaces/todo.interface";

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

   getOneTodo(todo: ITodo) {
      return todo;
   }

   create(data: TCreateTodoBody) {
      const newTodo = {
         id: generateId(),
         title: data.title,
         content: data.content,
      };

      todoList.push(newTodo);

      return newTodo;
   }

   update(updatingId: number, data: TUpdateTodoBody) {
      const currentTodo = todoList.find((todo) => todo.id === updatingId);

      if (currentTodo) {
         const index = todoList.findIndex((todo) => todo.id === updatingId);

         const newTodo = { ...currentTodo, ...data };

         todoList.splice(index, 1, newTodo);

         return newTodo;
      }
   }

   delete(removingId: number) {
      const index = todoList.findIndex((todo) => todo.id === removingId);

      todoList.splice(index, 1);
   }
}
