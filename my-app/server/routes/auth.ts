// import App from "../../src/App";

const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { checkLogIn } = require("./middlewares");

const memberDb = require("../models/member");
const exhibitionDb = require("../models/exhibition");
const commentDb = require("../models/comment");
const connection = require("../db/db");

const router = express.Router();
const fs = require("fs");

const directory = "../src/img/bringCultures";

// connection.query(
//   "SELECT * FROM members",
//   function (err: Error, result: any, field: any) {
//     console.log(result[0], "안녕");
//   }
// );

// 로그인
router.post(
  "/auth/signin",
  passport.authenticate("local", {
    failureRedirect: "/fail",
  }),
  (req: any, res: any) => {
    req.session.save(() => {
      res.send("로그인 완료");
    });
  }
);

// 카카오 로그인
router.get("/auth/kakao", passport.authenticate("kakao"));

router.use(
  "/auth/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/fail" }),
  (req: any, res: any) => {
    console.log("헤더");
    res.redirect("http://localhost:3000");
  } //
);

//변경사항
// 회원가입
router.post("/auth/signup", async (req: any, res: any, next: any) => {
  console.log("여기보기", req.isAuthenticated());
  const { newId, newPw } = req.body;
  console.log(newId, newPw);
  try {
    //mysql
    await connection.query(
      `SELECT * FROM members2 WHERE member_id='${newId}'`,
      async function (err: Error, results: any[], fields: any) {
        if (err) {
          return res.status(403).json("Sorry, query error happened");
        }
        if (results[0]) {
          return res.status(403).json("Sorry, this id is already used");
        } else {
          // 숫자(12)가 높아질수록 => 더 복잡해짐
          const hash = await bcrypt.hash(newPw, 12);
          connection.query(
            `INSERT INTO members2(member_id, member_pw) VALUES('${newId}','${hash}')`,
            function (err: any, result: any[], fields: any) {
              return res.status(200).send("회원가입 완료");
            }
          );
        }
      }
    );
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete("/auth/deleteComment/:id", async (req: any, res: any) => {
  commentDb.destroy({ where: { id: req.params.id } });
});

router.post("/auth/comment", async (req: any, res: any) => {
  // console.log("작성한 내용", req.body);

  const memberId = await memberDb.findOne({
    where: { member_id: req.body.userId },
  });

  console.log("작성한 내용", memberId.id);

  commentDb.create({
    comment: req.body.comment,
    commenter: memberId.id,
    contentName: req.body.contentName,
  });

  res.send("성공");
});

router.post("/auth/bringComments", async (req: any, res: any) => {
  console.log("look at this", req.body);

  // console.log("test", findMember.id);

  let go = await commentDb.findAll({
    where: {
      contentName: req.body.contentName,
    },
    include: [
      {
        model: memberDb,
        attributes: ["member_id"],
      },
    ],
  });
  res.send(go);
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
  req.logout(function (err: any) {
    if (err) {
      return next(err);
    }
  });
  console.log("로그아웃 후", req.user);
  res.clearCookie("connect.sid");
  res.send("logout");
});

router.get("/auth/completeLogin", checkLogIn, (req: any, res: any) => {
  console.log("here we go!");
  // res.redirect(301, "http://localhost:3000");
  res.json({ message: "로그인 성공", member_info: req.user.member_id });
  // 여기서 로그인에 성공한 회원의 회원정보를 보내준다.
});
router.get("/mypage", checkLogIn, (req: any, res: any) => {
  console.log("check isAuthenticated" + req.isAuthenticated());
  res.send("good");
});
router.get("/fail", (req: any, res: any) => {
  res.status(404).send("fail");
});

module.exports = router;
export {};
