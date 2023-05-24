exports.checkLogIn = (req: any, res: any, next: Function) => {
  if (req.isAuthenticated()) {
    // console.log("already login success", req.user, req.isAuthenticated());
    next();
  } else {
    res.status(403).send("no login");
  }
};
