import axios from "axios";
import { Todo } from "../types";

const baseUrl = "http://localhost:5000/api/todos";
export const getTodos = () => {
  axios.get<Todo[]>(baseUrl + "/").then((res) => {
    return res.data;
  });
};

export const updateTodo = (
  id: string,
  detail: string,
  deadline: Date,
  status: String
) => {
  axios
    .put(`${baseUrl}/${id}`, {
      detail,
      deadline,
      status,
    })
    .then((res) => {
      return res.data;
    });
};
export const removeTodo = (_id: string) => {
  axios.delete(`${baseUrl}/${_id}`).then((res) => {
    return res.data;
  });
};

export const addTodo = (detail: string, deadline: Date) => {
  axios
    .post(baseUrl + "/", {
      detail,
      deadline,
    })
    .then((res) => {
      return res.data;
    });
};
