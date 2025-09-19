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
})

export default movieController;