// 카카오로 로그인할 때
const passport = require("passport");
const kakaoStrategy = require("passport-kakao").Strategy;
const bcrypt = require("bcrypt");

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
        console.log(
          "kakao profile 여기까지는 왔고",
          profile,
          "그리고" + typeof profile.id
        );
        let wow = profile.id.toString();
        const hash = bcrypt.hash(wow, 12);
        console.log("가자", JSON.stringify(hash));
        try {
          const exMember = await memberDb.findOne({
            where: {
              member_id: profile.username,
              provider: "kakao",
            },
          });
          if (exMember) {
            done(null, exMember);
          } else {
            const newMember = await memberDb.create({
              // profile.id
              member_id: profile.username,
              member_pw: profile.id,
              provider: "kakao",
            });
            done(null, newMember);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};

export {};
