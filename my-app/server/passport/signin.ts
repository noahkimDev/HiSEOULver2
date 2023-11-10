const express = require("express");
const app = express();
const router = express();
const passport = require("passport");

router.post(
  "/auth/signin",
  passport.authenticate("local", {
    failureRedirect: "/fail",
  }),
  (req: any, res: any) => {
    req.session.signInCheck = true;
    res.send("로그인 완료");
    // req.session.save(() => {
    //   res.send("로그인 완료");
    // });
  }
);

module.exports = router;
