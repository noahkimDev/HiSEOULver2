const express = require("express");
const dotenv1 = require("dotenv");
const passport = require("passport");
const router = express.Router();
dotenv1.config();
// 비밀코드는 session을 만들 때 비밀번호

//////////////////////////
router.post(
  "/", //
  passport.authenticate("local", {
    failureRedirect: "/fail",
  }),
  (req: any, res: any) => {
    // console.log("0");
    req.session.save(() => {
      // console.log("5");
      res.redirect("/completeLogin");
    });
  }
);

module.exports = router;
