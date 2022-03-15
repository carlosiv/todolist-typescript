const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").put(editTodo).delete(deleteTodo);

module.exports = router;
