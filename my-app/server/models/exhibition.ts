const Sequelize = require("sequelize");
module.exports = class ExhibitionDetail extends Sequelize.Model {
  static initiate(sequelize: any) {
    ExhibitionDetail.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },

        fee: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        event_dates: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        hours_of_operation: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        english_address: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        explain: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        transportation: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        event_name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "ExhibitionDetail",
        tableName: "exhibitiondetails",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db: any) {}
};

export {};
