import { Router } from "express";
import movieService from "../services/movieService.js";
import Cast from "../models/Cast.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const movieController = Router();



movieController.get("/create", isAuth, (req, res) => {
    if (req.isAuthenticated) {
        console.log(req.user.email);
    }
    
    res.render("movies/create", { pageTitle: "Movie Create"});

});

movieController.post("/create", isAuth, async (req, res) => {
    await movieService.create(req.body);

    res.redirect("/");
});

movieController.get("/:movieId/details", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getMovieByIdDetailed(movieId);
    // const movieCast = await castService.getAll({includes: movie.casts});

    
    const movieRating = "★".repeat(Math.floor(Number(movie.rating)));

    res.render("movies/details", { movie, movieRating, pageTitle: "Movie Details" });
});

movieController.get("/search", async (req, res) => {
    const filter = req.query;
   
    const movies = await movieService.getAll(filter);
   

    res.render("search", { movies, filter, pageTitle: "Search Movies" });
});


movieController.get("/:movieId/attach", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getMovieById(movieId);
    const casts = await castService.getAll({ excludes: movie.casts });

    res.render("casts/attach", { movie, casts })
})

movieController.post("/:movieId/attach", async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    
    res.redirect(`/movies/${movieId}/details`);
})

export default movieController;