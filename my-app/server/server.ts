import { sensitiveHeaders } from "http2";

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv1 = require("dotenv");
const passportIndex = require("./passport/index");
const auth = require("./routes/auth");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const mysql = require("mysql2");

dotenv1.config();
const { sequelize } = require("./models/index");

app.set("port", process.env.PORT);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

sequelize
  .sync({ alert: true })
  .then(() => {
    console.log("데이터베이스 연결성공");
  })
  .catch((err: Error) => {
    console.error(err);
  });

passportIndex();

app.use("/", auth);

app.use((req: any, res: any, next: any) => {
  const error: any = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
  error.status = 404;
  next(error);
});
app.use((err: any, req: any, res: any, next: any) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  console.error(err);
});

app.listen(app.get("port"), function () {
  console.log("listening 8081");
});
