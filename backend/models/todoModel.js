const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    detail: {
      type: String,
      required: [true, "Please add content"],
    },
    status: {
      type: String,
      default: "pending",
    },
    finishedAt: {
      type: Date,
    },
    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
