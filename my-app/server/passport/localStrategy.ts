// ID, PW로 로그인할 때
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const memberDb = require("../models/member");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "memberId", //
        passwordField: "memberPw",
        session: true,
        passReqToCallback: false,
      },
      async (inputId: unknown, inputPw: unknown, done: Function) => {
        // console.log(inputId, inputPw);

        try {
          const findData = await memberDb.findOne({
            where: { member_id: inputId },
          });
          // console.log(findData);

          if (!findData) {
            // console.log(1, "없는 아이디");
            return done(null, false, { message: "존재하지 않는 아이디입니다" });
          } else {
            const comparePw = await bcrypt.compare(inputPw, findData.member_pw);
            if (comparePw) {
              // console.log(2, "아이디,비번 일치");
              return done(null, findData);
            } else if (!comparePw) {
              // console.log(3, "비번 틀렸음");
              return done(null, false, { message: "비번 틀렸음" });
            }
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
export {};
