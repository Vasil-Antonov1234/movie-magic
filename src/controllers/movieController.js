import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();



movieController.get("/create", (req, res) => {
    res.render("create");

});

movieController.post("/create", (req, res) => {
    movieService.create(req.body);

    res.redirect("/");
});

movieController.get("/:movieId/details", (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieService.getMovieById(movieId);
    const movieRating = "★".repeat(Math.floor(Number(movie.rating)));

    res.render("details", { movie, movieRating });
});

movieController.get("/search", (req, res) => {
    const filter = req.query;
   
    const movies = movieService.getAll(filter);
   

    res.render("search", { movies, filter });
});

export default movieController;