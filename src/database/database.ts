//Estamos simulando um banco de dados

import { TTodo } from "../interfaces/todo.interface";

export let id = 0;

export const todoList: TTodo[] = [];

export const generateId = () => {
    id++;
    return id;
}