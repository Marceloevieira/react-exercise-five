import { MoviesService } from "../../services/MoviesService";

export default async function handler(req, res) {

    const { data: { results } } = await MoviesService.getMovies();

     res.status(200).json({ results });
}