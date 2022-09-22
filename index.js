import express from "express";
import route from "./src/routes";

const app = express();
const defaultPort = 5000;
const bodyParser = require("body-parser");
// const cors = require("cors");

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

// const db = require("./models");
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

// set port, listen for requests
const PORT = process.env.PORT || defaultPort;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
