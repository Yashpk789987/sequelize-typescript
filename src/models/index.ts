import { Sequelize } from "sequelize";
import { Actor } from "./Actor";
import { Movie } from "./Movie";
import { ActorMovie } from "./ActorMovie";

export const sequelize = new Sequelize({
  dialect: "mysql",
  username: "root",
  password: "Node2021",
  database: "sequelize-typescript",
  define: {
    underscored: true,
  },
});

export { Movie, Actor, ActorMovie };
