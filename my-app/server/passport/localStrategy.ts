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
          //시작
          connection
            .query(`SELECT * FROM members2 WHERE member_id = '${inputId}'`)
            .then(async ([results, fields]: any) => {
              if (!results[0]) {
                return done(null, false, {
                  message: "존재하지 않는 아이디입니다",
                });
              } else {
                type compare = [boolean, number];
                let comparePassword: compare = [false, 0];
                for (let i = 0; i < results.length; i++) {
                  let numCompare = await bcrypt.compare(
                    inputPw,
                    results[i].member_pw
                  );
                  if (numCompare) {
                    comparePassword = [numCompare, i];
                    break;
                  } else {
                    comparePassword = [numCompare, i];
                  }
                }
                if (comparePassword[0]) {
                  // 여기까지 작동
                  // 회원정보 일치
                  return done(null, results[comparePassword[1]]);
                } else {
                  console.log("비번틀림");
                  done(null, false, { message: "비번 틀렸음" });
                }
              }
            });
          //끝
          // sequelize start
          // const findData = await memberDb.findOne({
          //   where: { member_id: inputId },
          // });
          // // console.log(findData);
          // if (!findData) {
          //   console.log(1, "없는 아이디");
          //   return done(null, false, { message: "존재하지 않는 아이디입니다" });
          // } else {
          //   let comparePw;
          //   inputPw === findData.member_pw
          //     ? (comparePw = true)
          //     : (comparePw = false);
          //   // const comparePw = await bcrypt.compare(inputPw, findData.member_pw);
          //   if (comparePw) {
          //     console.log(2, "아이디,비번 일치", findData.dataValues);
          //     return done(null, findData.dataValues);
          //   } else if (!comparePw) {
          //     console.log(3, "비번 틀렸음");
          //     return done(null, false, { message: "비번 틀렸음" });
          //   }
          // }
          // sequelize end
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
export {};
