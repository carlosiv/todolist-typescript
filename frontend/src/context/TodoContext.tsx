import { createContext, useContext, useState } from "react";
import { Todo } from "../types";

export const useTodos = (initial: Todo[]) => useState<Todo[]>(initial);

export const TodoContext = createContext<ReturnType<typeof useTodos> | null>(
  null
);
//hook
export const useTodoContext = () => useContext(TodoContext)!;

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
  );
};
