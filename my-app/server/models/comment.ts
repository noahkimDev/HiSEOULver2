const Sequelize = require("sequelize");
module.exports = class Comment extends Sequelize.Model {
  static initiate(sequelize: any) {
    Comment.init(
      {
        comment: {
          type: Sequelize.STRING(1000),
          unique: true,
          allowNull: false,
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
        modelName: "Comment",
        tableName: "comments",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db: any) {
    db.Member.hasMany(db.Comment, {
      foreignKey: "commenter",
      sourceKey: "id",
    });
  }
};

export {};
