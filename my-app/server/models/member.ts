const Sequelize = require("sequelize");
module.exports = class Member extends Sequelize.Model {
  static initiate(sequelize: any) {
    Member.init(
      {
        member_id: {
          type: Sequelize.STRING(100),
          unique: true,
          allowNull: false,
        },
        member_pw: { type: Sequelize.STRING(100), allowNull: false },
        provider: {
          type: Sequelize.STRING(10),
          allowNull: false,
          defaultValue: "local",
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Member",
        tableName: "members",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db: any) {}
};

export {};
