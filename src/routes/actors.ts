import express, { Request, Response } from "express";
import { Actor } from "../models";
import { formatErrors } from "../utils/formatErrors";

const router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
  try {
    const actor = await Actor.create(req.body);
    return res.status(200).json({ ok: true, actor });
  } catch (error) {
    return res.status(400).json({ ok: false, errors: formatErrors(error) });
  }
});

router.get("/list", async (_: Request, res: Response) => {
  try {
    const actors = await Actor.findAll();
    return res.status(200).json({ ok: true, actors });
  } catch (error) {
    return res.status(400).json({ ok: false, errors: formatErrors(error) });
  }
});

export { router as ActorRouter };
