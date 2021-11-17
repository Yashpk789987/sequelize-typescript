import express from "express";
import { sequelize } from "./models/sequelize";
import "./models/associations";
import "./models";
import { ActorRouter } from "./routes/actors";
import { MovieRouter } from "./routes/movies";

const app = express();
app.use(express.json());

app.use("/api/actor", ActorRouter);
app.use("/api/movie", MovieRouter);

app.listen(process.env.PORT || 4000, async () => {
  await sequelize.sync({ force: false });
  console.log(
    `SERVER STARTED AT PORT ${process.env.PORT || 4000} and DB SYNCED`
  );
});
