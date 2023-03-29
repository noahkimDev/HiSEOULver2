import { Request, Response } from "express";
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
// const router = express.Router();
const memberDb = require("../models/member");
const dotenv1 = require("dotenv");

// passport with express-session setting
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require("cors");
const cookieParser = require("cookie-parser");

const session = require("express-session");
const passportIndex = require("../passport/index");
const router = express.Router();
dotenv1.config();
// 비밀코드는 session을 만들 때 비밀번호

//////////////////////////
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//     },
//   })
// );
router.post(
  "/", //
  passport.authenticate("local", {
    failureRedirect: "/fail",
  }),
  (req: any, res: any) => {
    console.log("0");
    req.session.save(() => {
      console.log("5");
      res.redirect("/completeLogin");
    });
    // return res.redirect("/");
  }
);
// app.use(
//   "/signin",
//   passport.authenticate("local", { failureRedirect: "/fail" }), //

//   function (req: any, res: any) {
//     console.log("0");
//     // console.log(req.user);
//     // res.send("success");
//     req.session.save(() => {
//       console.log("5");
//       // res.send("그건그렇고");
//       res.redirect("/");
//     });
//   }
// );
// passportIndex();
//여기부터
//
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "memberId", //
//       passwordField: "memberPw",
//       session: true,
//       passReqToCallback: false,
//     },
//     async (inputId: unknown, inputPw: unknown, done: Function) => {
//       // console.log(inputId, inputPw);

//       try {
//         const findData = await memberDb.findOne({
//           where: { member_id: inputId },
//         });
//         console.log(findData);

//         if (!findData) {
//           // console.log(1, "없는 아이디");
//           return done(null, false, { message: "존재하지 않는 아이디입니다" });
//         } else {
//           const comparePw = await bcrypt.compare(inputPw, findData.member_pw);
//           if (comparePw) {
//             // console.log(2, "아이디,비번 일치");
//             return done(null, findData);
//           } else if (!comparePw) {
//             // console.log(3, "비번 틀렸음");
//             return done(null, false, { message: "비번 틀렸음" });
//           }
//         }
//       } catch (error) {
//         return done(error);
//       }
//     }
//   )
// );
// // 위까지가 검사
// //////////////////////////

// // session 생성 & 저장
// // user 매개변수는 위의 findData 값이 전달된 것임
// passport.serializeUser((user: any, done: Function) => {
//   console.log("gogo", user);
//   done(null, user.member_id); // 'id'라는 정보로 세션을 만들고 저장한다.
// });

// // 이 세션데이터를 가진 사람을 DB에서 찾아주세요(마이페이 접속시 발동)
// passport.deserializeUser((아이디: any, done: Function) => {
//   done(null, {});
// });

// 저기까지

// router.get("/fail", (req: Request, res: Response) => {
//   console.log("fail");
// });

module.exports = router;
