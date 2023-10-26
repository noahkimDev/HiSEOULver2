const passport = require("passport");
// 로그인 로직을 적어놓은 파일 => Strategy 파일
// localStrategy : id/pw 로그인,  kakaoStratety : 카카오 로그인
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const memberDb = require("../models/member");
const connection = require("../db/db");

module.exports = () => {
  passport.serializeUser((user: any, done: any) => {
    console.log("시리얼", user.member_id);
    done(null, user); // 'id'라는 정보로 세션을 만들고 저장한다.
  });

  // 이 세션데이터를 가진 사람을 DB에서 찾아주세요(ex 마이페이 접속시 발동)
  // req.isAuthenticated()가 false가 나온다면 여기를 보자

  passport.deserializeUser((user: any, done: any) => {
    console.log("deserializeUser", "3", user.member_id);
    try {
      done(null, user);
    } catch (error) {
      console.log(error);
      done(error);
    }
    // memberDb
    //   .findOne({ where: { member_id } }) //
    //   .then((user: any) => done(null, user)) //
    //   .catch((err: any) => done(err));
  });

  kakao();
  local();
};

export {};
