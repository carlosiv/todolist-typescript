const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find().sort({ deadline: 1 });
  res.status(200).json(todos);
});

const addTodo = asyncHandler(async (req, res) => {
  if (!req.body.detail) {
    res.status(400);
    throw new Error("Please add Content");
  }
  const todo = await Todo.create({
    detail: req.body.detail,
    deadline: req.body.deadline,
    finishedAt: null,
  });
  res.status(200).json(todo);
});

const editTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedTodo);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  await todo.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
};
