import express from "express";
import { sequelize } from "./models";
import { Actor } from "./models/Actor";
import { ActorMovie } from "./models/ActorMovie";
import { Movie } from "./models/Movie";
import "./models/associations";
import { ActorRouter } from "./routes/actors";
import { MovieRouter } from "./routes/movies";

const app = express();
app.use(express.json());

app.use("/api/actor", ActorRouter);
app.use("/api/movie", MovieRouter);

app.listen(process.env.PORT || 4000, async () => {
  const models = [Actor, Movie, ActorMovie];
  models.forEach(() => {}); // just for including all models
  await sequelize.sync({ force: false });
  console.log(
    `SERVER STARTED AT PORT ${process.env.PORT || 4000} and DB SYNCED`
  );
});
