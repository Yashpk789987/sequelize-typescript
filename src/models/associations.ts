import { Actor } from "./Actor";
import { ActorMovie } from "./ActorMovie";
import { Movie } from "./Movie";

Actor.belongsToMany(Movie, { through: ActorMovie });
Movie.belongsToMany(Actor, { through: ActorMovie });
