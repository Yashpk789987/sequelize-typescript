import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

export class ActorMovie extends Model {
  public id!: number;
  public movieId!: number;
  public actorId!: number;
}

ActorMovie.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    modelName: "actorMovie",
    sequelize,
  }
);
