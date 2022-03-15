import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../types";
import TodoCardsOne from "./TodoCardOne";

const ListColumn = () => {
  //context api
  const [todos] = useTodoContext();

  //usetate -> type of todo
  const [selectedType, setSelectedType] = useState<String>("all");

  //handles filter of todos
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <fieldset>
          <legend>Please select todo status</legend>
          <span>
            <input
              type="radio"
              name="todoStatus"
              value="all"
              id="status"
              checked={selectedType === "all"}
              onChange={radioHandler}
            />
            <label htmlFor="todoStatus">All</label>
          </span>

          <span>
            <input
              type="radio"
              name="todoStatus"
              value="pending"
              id="status"
              checked={selectedType === "pending"}
              onChange={radioHandler}
            />
            <label htmlFor="todoStatus">Pending</label>
          </span>

          <span>
            <input
              type="radio"
              name="todoStatus"
              value="current"
              id="status"
              checked={selectedType === "current"}
              onChange={radioHandler}
            />
            <label htmlFor="todoStatus">Current</label>
          </span>
          <span>
            <input
              type="radio"
              name="todoStatus"
              value="done"
              id="status"
              checked={selectedType === "done"}
              onChange={radioHandler}
            />
            <label htmlFor="todoStatus">Done</label>
          </span>
        </fieldset>
      </div>
      <div>
        {selectedType !== "all"
          ? todos
              .filter((todo: Todo) => todo.status === selectedType)
              .map((todo: Todo, i: number) => {
                return <TodoCardsOne key={i} todo={todo} />;
              })
          : todos.map((todo: Todo, i: number) => {
              return <TodoCardsOne key={i} todo={todo} />;
            })}
      </div>
    </div>
  );
};

export default ListColumn;
