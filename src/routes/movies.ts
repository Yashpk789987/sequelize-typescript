import express, { Request, Response } from "express";
import { ActorMovie } from "../models/ActorMovie";
import { Actor } from "../models/Actor";
import { Movie } from "../models/Movie";
import { formatErrors } from "../utils/formatErrors";

const router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
  try {
    const movie = await Movie.create(req.body);
    return res.status(200).json({ ok: true, movie });
  } catch (error) {
    return res.status(400).json({ ok: false, errors: formatErrors(error) });
  }
});

router.get("/list", async (_: Request, res: Response) => {
  try {
    const movies = await Movie.findAll({
      include: {
        model: Actor,
        through: {
          model: ActorMovie,
          attributes: [],
        } as any,
      },
    });
    return res.status(200).json({ ok: true, movies });
  } catch (error) {
    return res.status(400).json({ ok: false, errors: formatErrors(error) });
  }
});

router.post("/add-actor", async (req: Request, res: Response) => {
  try {
    const { movieId, actorIds } = req.body;
    console.log(actorIds);
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(400).json({ ok: false, message: "no movie found" });
    }
    movie.addActors(actorIds);
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ ok: false, errors: formatErrors(error) });
  }
});

export { router as MovieRouter };
