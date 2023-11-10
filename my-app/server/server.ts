import { createSlice } from "@reduxjs/toolkit";
import { sensitiveHeaders } from "http2";

const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const dotenv1 = require("dotenv");
const passportIndex = require("./passport/index");
const auth = require("./routes/auth");
const morgan = require("morgan");
const passport = require("passport");
// const mysql = require("mysql2");

const redis = require("redis");
const RedisStore = require("connect-redis").default;

dotenv1.config();
// const { sequelize } = require("./models/index");
// const value = redisClient.get("ex-key");
// app.use(express.favicon());
app.set("port", process.env.PORT);
app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`,
  // legacyMode: true,
});

// redisClient.on("connect", function () {
//   console.log("Connected to redis successfully");
// });
redisClient.on("error", function (err: any) {
  console.log("Could not establish a connection with redis. " + err);
  // console.error(err);
});

redisClient.connect();
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "session : ",
});

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    // store: new RedisStore({ client: redisClient, prefix: "session" }),
    cookie: {
      maxAge: 60 * 60 * 24000,
      httpOnly: true,
      secure: false,
      sameSite: "none",
    },
    store: redisStore,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// sequelize
//   .sync({ alert: true })
//   .then(() => {
//     console.log("데이터베이스 연결성공");
//   })
//   .catch((err: Error) => {
//     console.error(err);
//   });

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
