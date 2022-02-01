const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

mongoose.connect("mongodb://localhost:27017/demoAppDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error :"));
db.once("open", () => {
  console.log("Connected Successfully !");
});

app.use("/api", require("./src/router/routes"));
const port = 3100;
app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
