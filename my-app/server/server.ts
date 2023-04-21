import { sensitiveHeaders } from "http2";
// const { createEngine } = require("express-react-views");

const express = require("express");
const app = express();

const cors = require("cors");
const dotenv1 = require("dotenv");
// const signupAndSignin = require("./routes/auth");
// const signupRouter = require("./routes/signupRouter");
// const signinRouter = require("./routes/signinRouter");
const passportIndex = require("./passport/index");
const auth = require("./routes/auth");

const path = require("path");
const morgan = require("morgan");
const passport = require("passport");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const xhr = new XMLHttpRequest();

dotenv1.config();
const { sequelize } = require("./models/index");
// const passportConfig = require("./passport/index.ts");

// passportConfig();
// xhr.withCredentials = true;
app.set("port", process.env.PORT);

app.use(morgan("dev"));
// app.use(cookieParser("abcde"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    // store: new FileStore({ logFn: function () {} }),
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(
//   cors({
//     origin: "*", // 출처 허용 옵션
//     credential: "true", // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
//   })
// );

sequelize
  .sync({ alert: true })
  .then(() => {
    console.log("데이터베이스 연결성공");
  })
  .catch((err: Error) => {
    console.error(err);
  });

// const { checkLogIn } = require("./routes/middlewares");

passportIndex();

// app.get("/auth/kakao", (req: any, res: any) => {
//   res.send("카카오로그인성공");
// });
//  get요청 '/getList'    img/bringCultures 파일 리스트

app.use("/", auth);
// app.use("/completeLogin", (req:any,res:any)=>{
//   console.log('완성')
// });

// app.use("/signin", signinRouter);
// app.use("/signup", signupRouter);
// app.get("/completeLogin", checkLogIn, (req: any, res: any) => {
//   res.send("로그인성공");
// });
// app.get("/mypage", checkLogIn, (req: any, res: any) => {
//   res.send("good");
// });
// app.get("/fail", (req: any, res: any) => {
//   res.send("fail");
// });

// function 로그인했니(req: any, res: Response, next: Function) {
//   // console.log(req);
//   if (req.user) {
//     next();
//   } else {
//     res.status(403).send("로그인 필요");
//   }
// }

// app.get("/", (req: Request, res: Response) => {
//   console.log("?");
// });

app.use((req: any, res: any, next: any) => {
  const error: any = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
  error.status = 404;
  next(error);
});
app.use((err: any, req: any, res: any, next: any) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  console.log(err);
  // res.render("error");
});
//app.listen(서버띄울 포트번호, 띄운 후 실행할 코드)

app.listen(app.get("port"), function () {
  console.log("listening 8081");
});

export {};
