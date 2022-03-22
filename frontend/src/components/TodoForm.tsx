import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { addTodo } from "../api/todoApi";

const TodoBox = styled.div`
  width: 100%;
  width: 400px;
  padding: 40px;
  margin: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const TodoBoxH2 = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

const TodoBoxDetail = styled.div`
  position: relative;
`;
const TodoBoxDetailInput = styled.input`
  width: 100%;
  padding: 10px 0;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const TodoBoxDetailLabel = styled.label`
  position: absolute;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
  top: -20px;
  font-size: 12px;
  ${TodoBoxDetailInput}:focus ~ & {
    color: #03e9f4;
  }
`;

const TodoBoxDeadlineInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const TodoBoxDeadlineLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
  top: -20px;
  left: 0;
  font-size: 12px;

  ${TodoBoxDeadlineInput}:focus ~ & {
    color: #03e9f4;
  }
`;

const TodoBoxSubmit = styled.button`
  background-color: teal;
  border: teal;
  cursor: pointer;
`;

const TodoForm = () => {
  //form states
  const [detail, setDetail] = useState("");
  const [taskDeadline, setTaskDeadline] = useState<Date>(new Date());

  //handles submit
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    addTodo(detail, taskDeadline);
    setTaskDeadline(new Date());
    setDetail("");
  };

  return (
    <TodoBox>
      <TodoBoxH2>Add Todo</TodoBoxH2>
      <TodoBoxDetail>
        <TodoBoxDetailInput
          name="detail"
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          required
        />
        <TodoBoxDetailLabel>Details</TodoBoxDetailLabel>
      </TodoBoxDetail>
      <TodoBoxDetail>
        <TodoBoxDeadlineInput
          name="deadline"
          type="date"
          required
          value={moment(taskDeadline).format("YYYY-MM-DD")}
          onChange={(e) => {
            setTaskDeadline(new Date(e.target.value));
          }}
        />
        <TodoBoxDeadlineLabel>Deadline</TodoBoxDeadlineLabel>
      </TodoBoxDetail>
      <TodoBoxSubmit onClick={handleSubmit}>Add Todo</TodoBoxSubmit>
    </TodoBox>
  );
};

export default TodoForm;
