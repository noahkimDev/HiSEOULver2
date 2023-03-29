exports.checkLogIn = (req: any, res: any, next: Function) => {
  if (req.isAuthenticated()) {
    console.log("로그인 이미 했음", req.user, req.isAuthenticated());
    next();
  } else {
    res.status(403).send("no login");
  }
};

// function 로그인했는지(req: any, res: any, next: any) {
//   console.log(req.user);
//   if (req.user) {
//     console.log("다른 라우터로 들어왔잖아 이미 로그인했노", req.user);
//     next();
//   } else {
//     res.status(403).send("no login");
//   }
// }
