exports.module = {
  checkLogIn: (req: any, res: any, next: Function) => {
    if (req.session.signInCheck) {
      // console.log("already login success", req.user, req.isAuthenticated());
      next();
    } else {
      res.status(403).send("no login");
    }
  },
};
