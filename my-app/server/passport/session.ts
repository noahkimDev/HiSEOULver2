import { appendFile } from "fs";
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

// secret : sessison 만들 때의 비밀번호 개념
app.use(
  session({ secret: "비밀코드", resave: true, saveUninitialized: false })
);

app.use(passport.initialize());
app.use(passport.session());

// 여기까지가  Session 방식 로그인 구현 준비
/////////////////////////////////////////////////////////////////////

// 미들웨어 : 응답-요청 사이에 실행되는 함수 (웹서버는 응답-요청하는 기계)

// passport.authenticate(..)에서 로그인 인증(아이디,비번 검사 미들웨어)을 자동으로 하는 것이 아니다.
// 인증방식을 따로 상세히 작성해야함
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/fail" }),
  (req, res) => {
    res.redirect("/");
  }
);

// 인증 실패했을 때
app.get("/fail", (req, res) => {});

// 인증방식 작성
passport.use(
  new LocalStrategy({
    usernameField: "id",
    passwordField: "pw",
    session: true,
    passReqTocallback: false,
  }),
  (입력한아이디, 입력한비번, done) => {
    console.log(입력한아이디, 입력한비번);
  }

  
);

module.exports = app;
