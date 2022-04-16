import { MoviesService } from "../../../services/MoviesService";

export default async function handler(req, res) {

    const { id } = req.query;

    const { data: movie } = await MoviesService.getMovie(id);
        console.log(movie);
    res.status(200).json({ ...movie });
}