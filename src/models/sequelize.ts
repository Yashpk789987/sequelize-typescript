import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "mysql",
  username: "root",
  password: "Node2021",
  database: "sequelize-typescript",
  define: {
    underscored: true,
  },
});
