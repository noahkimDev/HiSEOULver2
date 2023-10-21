// ID, PW로 로그인할 때
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const memberDb = require("../models/member");
const connection = require("../db/db");

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
          await connection.query(
            // id, pw 둘다 일치하는 데이터 찾아야함
            // where에 2개의 조건 넣는 법
            `SELECT member_id FROM member2 WHERE member_id = '${inputId}'`,
            async function (err: Error, results: any[], fields: any) {
              if (err) {
                return done(err);
              }
              if (!results[0]) {
                // 존재하지않는 로그인정보인 경우
                return done(null, false, {
                  message: "존재하지 않는 아이디입니다",
                });
              } else {
                console.log(results);
                const comparePassword = await bcrypt.compare(
                  inputPw,
                  results[0].member_pw
                );

                if (comparePassword) {
                  return done(null, results[0]);
                } else {
                  return done(null, false, { message: "비번 틀렸음" });
                }
              }
            }
          );

          // sequelize
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
