require("dotenv").config();
const express = require("express");
const http = require("http");
const errorhandler = require("errorhandler");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(errorhandler());
app.use(
  session({
    secret: "Artgrails",
    cookie: {
      maxAge: 60000,
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", require("./routes"));

//*** --- catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

http.createServer(app).listen(process.env.PORT);
