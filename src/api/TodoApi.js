import axios from "axios";

const baseUrl = 'http://127.0.0.1:5000/todo/'

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
