import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { useTodoContext } from "../context/TodoContext";
import TodoForm from "./TodoForm";
const baseUrl = "http://localhost:5000/api/todos";

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 40px;
  margin-top: 20px;
`;

const Dashboard = () => {
  //todo context
  const [todos, setTodos] = useTodoContext();

  //useffect for refreshes todos
  useEffect(() => {
    axios.get(baseUrl + "/").then((res) => setTodos(res.data));
  }, [todos, setTodos]);

  return (
    <div>
      <div>
        <TodoForm />
      </div>
      <StatContainer>
        <div>
          <span>Total: </span>
          <span>{todos ? todos.length : 0}</span>
        </div>
        <div>
          <span>Pending: </span>
          <span>
            {todos
              ? todos.filter((todo) => todo.status === "pending").length
              : 0}
          </span>
        </div>
        <div>
          <span>Current: </span>
          <span>
            {todos
              ? todos.filter((todo) => todo.status === "current").length
              : 0}
          </span>
        </div>
        <div>
          <span>Done: </span>
          <span>
            {todos ? todos.filter((todo) => todo.status === "done").length : 0}
          </span>
        </div>
      </StatContainer>
    </div>
  );
};

export default Dashboard;
