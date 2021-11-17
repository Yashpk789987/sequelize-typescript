import _ from "lodash";
import { ValidationError } from "sequelize";

export const formatErrors = (e: ValidationError) => {
  if (e instanceof ValidationError) {
    return e.errors.map((x) => ({
      field: _.camelCase(x.path as any),
      message: x.message,
    }));
  }
  return e;
};
