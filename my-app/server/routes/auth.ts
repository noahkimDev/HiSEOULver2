// import App from "../../src/App";

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const path = require("path");
// const app1 = express1();
const { checkLogIn } = require("./middlewares");

const memberDb = require("../models/member");
const exhibitionDb = require("../models/exhibition");

const router = express.Router();
const cors = require("cors");
const fs = require("fs");

const directory = "../src/img/bringCultures";
// app.set("");

// 로그인
router.post(
  "/auth/signin",
  passport.authenticate("local", {
    failureRedirect: "/fail",
  }),
  (req: any, res: any) => {
    req.session.save(() => {
      // res.setHeader("Access-Control-Allow-Credentials", true);
      res.send("로그인 완료");
    });
  }
);

// 카카오 로그인
router.get("/auth/kakao", passport.authenticate("kakao"));
// router.post("/auth/kakao", (req: any, res: any) => {
//   // res.redirect("/");
//   res.send("그런데");
// });

// router.get("/", (req: any, res: any) => {
//   // console.log("경로", path.join(__dirname, "../../src/App.tsx"));
//   res.send("그렇구만 기래");
//   // return res.render(path.join(__dirname, "../../src/App"));
//   // return res.sendFile(path.join(__dirname, "../../src/culter/culture.css"));
//   // res.render(App());
// });

router.use(
  "/auth/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/fail" }),
  (req: any, res: any) => {
    console.log("헤더");
    // res.send("kakao login success");
    res.redirect("http://localhost:3000");
    // res.redirect("/auth/completeLogin");
  } //
);

//변경사항
// 회원가입
router.post("/auth/signup", async (req: any, res: any, next: any) => {
  console.log("여기보기", req.isAuthenticated());
  const { newId, newPw } = req.body;
  try {
    const checkId = await memberDb.findOne({
      where: { member_id: newId },
    });

    if (checkId) {
      return res.status(403).json("Sorry, this id is already used");
    }
    // 숫자(12)가 높아질수록 => 더 복잡해짐
    const hash = await bcrypt.hash(newPw, 12);
    // console.log(`hash : ${hash}`);
    memberDb.create({
      member_id: newId,
      member_pw: hash,
    });
    return res.send("회원등록 성공");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/auth/exhibition_detail", async (req: any, res: any) => {
  let data = req.body;

  const clickedEvent = await exhibitionDb.findOne({
    where: { name: data.clickedEvent },
  });

  res.send(clickedEvent);
});

router.get("/auth/getList", (req: any, res: any) => {
  fs.readdir(directory, (err: any, files: any) => {
    if (err) {
      console.error(err);
      console.log("에러");
      return;
    }
    console.log("성공");
    res.send(files);
  });
});
// 최초 접속 시 로그인 유무 확인하는 코드
router.get("/auth/haveUserInfo", (req: any, res: any) => {
  console.log(1, req.isAuthenticated());
  res.json({ user: req.user });
});

router.post("/auth/logout", (req: any, res: any, next: any) => {
  console.log("로그아웃 전", req.user);
  req.logout(function (err: any) {
    if (err) {
      return next(err);
    }
  });
  console.log("로그아웃 후", req.user);
  res.clearCookie("connect.sid");
  res.send("logout");
  // req.session.destroy(() => {
  //   res.send("logout");
  // });
  // req.session.destroy((err: any) => {
  //   if (err) {
  //     console.log("에러났누");
  //     return next(err);
  //   }
  //   res.clearCookie("connect.sid");
  // });
});
// router.get("/wow", (req: any, res: any) => {
//   console.log("이건성공");
// });
router.get("/auth/completeLogin", checkLogIn, (req: any, res: any) => {
  console.log("here we go!");
  // res.redirect(301, "http://localhost:3000");
  res.json({ message: "로그인 성공", member_info: req.user.member_id });
  // 여기서 로그인에 성공한 회원의 회원정보를 보내준다.
});
router.get("/mypage", checkLogIn, (req: any, res: any) => {
  console.log("어디야 " + req.isAuthenticated());
  res.send("good");
});
router.get("/fail", (req: any, res: any) => {
  res.status(404).send("fail");
});

module.exports = router;
export {};
