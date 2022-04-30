const express = require("express");
const morgan = require("morgan");
const server = express();
const router = require("./routes/routes.js");
const { db } = require("./database/connections.js");
var bodyParser = require("body-parser");
const cors = require("cors");
const {PORT} = process.env;
require('dotenv').config();

server.use(
  cors({
    origin: '*',
  })
);

server.use(express.json());
server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/", router);
server.get("*", (req, res) => {
  res.status(400).json({ error: "Page not found" });
});
server.listen(PORT, () => {
  //Definimos puerto
  console.log(`Listening on ${PORT}`);
  //hacemos el llamado a la bd
  db.sync({ force: false });
});
