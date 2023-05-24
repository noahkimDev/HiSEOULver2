import { Request, Response } from "express";
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const memberDb = require("../models/member");

router.post("/", async (req: any, res: any, next: any) => {
  // console.log("여기보기", req.isAuthenticated());
  const { newId, newPw } = req.body;
  try {
    const checkId = await memberDb.findOne({
      where: { member_id: newId },
    });

    if (checkId) {
      return res.status(403).json("Sorry, this id is already used");
    }
    // 숫자(12)가 높아질수록 => 더 복잡해짐
    const hash = await bcrypt.hash(newPw, 12);
    // console.log(`hash : ${hash}`);
    memberDb.create({
      member_id: newId,
      member_pw: hash,
    });
    return res.send("회원등록 성공");
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
