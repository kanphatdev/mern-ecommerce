// import dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");
// create express app
const app = express();
// midleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// routes
readdirSync("./routes").map((item) =>
  app.use("/api", require("./routes/" + item))
);
// start server
app.listen(5000, () => console.log("server listening on port 5000"));
