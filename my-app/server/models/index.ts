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

// Member.initiate(sequelize);
// ExhibitionDetail.initiate(sequelize);
// Comment.initiate(sequelize);
Member.initiate(sequelize);
ExhibitionDetail.initiate(sequelize);
Comment.initiate(sequelize);

Member.associate(db1);
ExhibitionDetail.associate(db1);
Comment.associate(db1);

// Object.keys(db1).forEach((modelName) => {
//   if ("associate" in db1[modelName]) {
//     db1[modelName].associate(db1);
//   }
// });

// sequelize.sync({ alter: true }).then(() => {
//   console.log("All models were synchronized successfully.");
// });

module.exports = db1;
export {};
