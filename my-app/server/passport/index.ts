const passport = require("passport");
// 로그인 로직을 적어놓은 파일 => Strategy 파일
// localStrategy : id/pw 로그인,  kakaoStratety : 카카오 로그인
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const memberDb = require("../models/member");

module.exports = () => {
  passport.serializeUser((user: any, done: Function) => {
    // console.log("2");
    done(null, user.member_id); // 'id'라는 정보로 세션을 만들고 저장한다.
  });

  // 이 세션데이터를 가진 사람을 DB에서 찾아주세요(ex 마이페이 접속시 발동)
  passport.deserializeUser((member_id: any, done: any) => {
    console.log("deserializeUser", "3");
    memberDb
      .findOne({ where: { member_id } }) //
      .then((user: any) => done(null, user)) //
      .catch((err: any) => done(err));
  });
  kakao();
  local();
};

export {};
