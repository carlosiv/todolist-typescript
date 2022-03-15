import { useTodos } from "../context/TodoContext";

export type Todo = {
  _id: string;
  detail: string;
  status: string;
  createdAt: Date;
  finishedAt: Date | undefined;
  deadline: Date;
};

export type useTodosType = ReturnType<typeof useTodos>;
export type TodosType = useTodosType[0];
export type SetTodosType = useTodosType[1];
