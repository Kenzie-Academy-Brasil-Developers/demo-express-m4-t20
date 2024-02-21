import { ITodo } from "../interfaces/todo.interface";

//Estamos simulando um banco de dados

export let id = 0;

export const todoList: ITodo[] = [];

export const generateId = () => {
    id++;
    return id;
}