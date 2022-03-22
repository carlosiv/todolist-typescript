import React, { useState } from "react";
import { Todo } from "../types";
import moment from "moment";
import { removeTodo, updateTodo } from "../api/todoApi";
import styled from "styled-components";

//props type from parent
type Props = {
  todo: Todo;
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
  background-color: teal;
  border-radius: 20px;
  padding: 20px;
`;
const CardContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
  background-color: darkslategrey;
  position: relative;
  border-radius: 20px;
  padding: 20px;
`;
const CardH2 = styled.h2`
  color: snow;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-left: 0.7em;
`;

const CardP = styled.p`
  margin: 0;
  padding-bottom: 4px;
  color: snow;
  padding-left: 1em;
  font-size: 1.1rem;
`;

const CardActions = styled.div`
  padding-left: 1.5em;
  font-size: 0.8rem;
`;

export const CardLink = styled.a`
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  margin: 4px;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 25px;
    left: 0;
    content: "";
    width: 0%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.5s;
  }
  &:hover::after {
    width: 100%;
  }
`;

const CardInput = styled.input`
  border-radius: 10px;
  background-color: black;
  color: white;
  font-size: 16px;
`;

export function TodoCardsOne({ todo }: Props) {
  //component states
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState<string>(todo.detail);
  const [taskDeadline, setTaskDeadline] = useState<Date>(todo.deadline);
  const [status, setStatus] = useState<String>(todo.status);

  //handles radio of todo status
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  //set states on edit click
  const handleEdit = () => {
    setEdit(true);
    setTask(todo.detail);
    setTaskDeadline(todo.deadline);
  };

  //handles todo updates
  const handleUpdate = (id: string) => {
    updateTodo(id, task, taskDeadline, status);
    setTask("");
    setTaskDeadline(new Date());
    setEdit(false);
  };

  //handles todo delete
  const handleDelete = () => {
    removeTodo(todo._id);
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <CardContainerEdit>
          <CardP>
            <span>Detail: </span>
            <CardInput
              type="text"
              name="task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </CardP>
          <CardP>
            <span>Deadline: </span>
            <CardInput
              type="date"
              name="deadline"
              value={moment(taskDeadline).format("YYYY-MM-DD")}
              onChange={(e) => {
                setTaskDeadline(new Date(e.target.value));
              }}
            />
          </CardP>
          <CardP>
            <span>
              <input
                type="radio"
                name="status"
                value="pending"
                id="status"
                checked={status === "pending"}
                onChange={radioHandler}
              />
              <label>Pending</label>
            </span>
            <span>
              <input
                type="radio"
                name="status"
                value="current"
                id="status"
                checked={status === "current"}
                onChange={radioHandler}
              />
              <label>Current</label>
            </span>
            <span>
              <input
                type="radio"
                name="status"
                value="done"
                id="status"
                checked={status === "done"}
                onChange={radioHandler}
              />
              <label>Done</label>
            </span>
          </CardP>
          <CardActions>
            <CardLink onClick={handleDelete}>Delete</CardLink>
            <CardLink onClick={() => handleUpdate(todo._id)}>
              Save Changes
            </CardLink>
            <CardLink onClick={() => setEdit(false)}>Cancel</CardLink>
          </CardActions>
        </CardContainerEdit>
      ) : (
        <CardContainer>
          <CardH2>{todo.detail}</CardH2>
          <CardP>
            <span>Deadline: </span>
            <span>{moment(todo.deadline).format("MMM DD, YYYY")}</span>
          </CardP>
          <CardP>
            <span>Date added: </span>
            <span>{moment(todo.createdAt).format("MMM DD, YYYY")}</span>
          </CardP>
          <CardP>
            <span>Status: </span>
            <span>{todo.status.toLocaleUpperCase()}</span>
          </CardP>
          <CardActions>
            <CardLink onClick={handleEdit}>Edit</CardLink>
          </CardActions>
        </CardContainer>
      )}
    </>
  );
}
export default TodoCardsOne;
