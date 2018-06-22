require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");

const controller = require("./controller.js");

const app = express();

app.use(json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    }
  })
);

app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});

app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.addHouse);
app.delete("/api/houses/:id", controller.deleteHouse);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
