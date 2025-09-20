import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();



movieController.get("/create", (req, res) => {
    res.render("create", { pageTitle: "Movie Create"});

});

movieController.post("/create", async (req, res) => {
    await movieService.create(req.body);

    res.redirect("/");
});

movieController.get("/:movieId/details", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getMovieById(movieId);
    const movieRating = "★".repeat(Math.floor(Number(movie.rating)));

    res.render("details", { movie, movieRating, pageTitle: "Movie Details" });
});

movieController.get("/search", async (req, res) => {
    const filter = req.query;
   
    const movies = await movieService.getAll(filter);
   

    res.render("search", { movies, filter, pageTitle: "Search Movies" });
});

export default movieController;