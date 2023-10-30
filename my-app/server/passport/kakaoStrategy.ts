// 카카오로 로그인할 때
const passport = require("passport");
const kakaoStrategy = require("passport-kakao").Strategy;
const bcrypt = require("bcrypt");
const connection = require("../db/db");

const memberDb = require("../models/member");

module.exports = () => {
  passport.use(
    new kakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
      },
      //  accessToken,refreshToken은 지금 사용X,  OAUTH2 공부 필요
      // 본 서비스에서는 profile만 받아와서 사용할 예정
      async (
        accessToken: any,
        refreshToken: any,
        profile: any,
        done: Function
      ) => {
        // console.log(
        //   "kakao profile 여기까지는 왔고",
        //   profile,
        //   "그리고" + typeof profile.id
        // );
        let wow = profile.id.toString();
        const hash = await bcrypt.hash(wow, 12);
        // console.log("해쉬dd", hash);
        try {
          // mysql2 시작
          await connection
            .query(
              `SELECT * FROM members2
            WHERE member_id='${profile.username}'
            AND provider='kakao'`
            )
            .then(async ([result, field]: any) => {
              // console.log("갈때까지", result);
              if (result[0]) {
                let booleanResult = await bcrypt.compare(
                  profile.id.toString(),
                  result[0].member_pw
                );

                if (booleanResult) {
                  done(null, result[0]);
                }
              } else {
                await connection.query(
                  `INSERT INTO members2(member_id, member_pw,provider)
                    VALUES('${profile.username}','${hash}','kakao')`
                );

                await connection
                  .query(
                    `SELECT * FROM members2 
                  WHERE provider='kakao' AND member_id='${profile.username}'`
                  )
                  .then(([results, field]: any) => {
                    done(null, results[0]);
                  });
              }
            });
          // mysql2 끝
          // const exMember = await memberDb.findOne({
          //   where: {
          //     member_id: profile.username,
          //     provider: "kakao",
          //   },
          // });
          // if (exMember) {
          //   done(null, exMember);
          // } else {
          //   const newMember = await memberDb.create({
          //     // profile.id
          //     member_id: profile.username,
          //     member_pw: profile.id,
          //     provider: "kakao",
          //   });
          //   console.log("무라카노", newMember);
          //   done(null, newMember);
          // }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};

export {};
