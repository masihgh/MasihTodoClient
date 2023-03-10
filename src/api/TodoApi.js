import axios from "axios";

const baseUrl = 'https://masih-todo-server.vercel.app/todo/'

export const getAllTodos = async () => {
    const todos = axios.get(baseUrl)
    return todos
}

export const updateTodo = async (id, todo) => {
    return axios.patch(baseUrl + id, todo);
};

export const createTodo = async (todo) => {
    return axios.post(baseUrl, todo)
};

export const deleteTodo = async (id) => {
    return axios.delete(baseUrl + id);

};
