const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;
const envi = process.env.NODE_ENV || "development";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todoRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port} @${envi}`);
});
