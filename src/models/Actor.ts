import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

export class Actor extends Model {
  public id!: number;
  public name!: string;
}

Actor.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: "this category already exists",
      validate: {
        len: {
          args: [2, 20],
          msg: "name length should not be less than 4 characters",
        },
      },
    },
  },
  {
    modelName: "actor",
    sequelize,
  }
);
