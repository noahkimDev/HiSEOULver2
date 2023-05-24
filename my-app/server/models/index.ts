const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config")[env];

const Member = require("./member");
const ExhibitionDetail = require("./exhibition");
const Comment = require("./comment");

const db1: any = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db1.sequelize = sequelize;

db1.Member = Member;
db1.ExhibitionDetail = ExhibitionDetail;
db1.Comment = Comment;

Member.initiate(sequelize);
ExhibitionDetail.initiate(sequelize);
Comment.initiate(sequelize);

Member.associate(db1);
ExhibitionDetail.associate(db1);
Comment.associate(db1);

module.exports = db1;
export {};
