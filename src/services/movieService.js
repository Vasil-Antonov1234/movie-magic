import Movie from "../models/Movie.js"

export default {
    async getAll(filter) {
        return await Movie.find(filter).lean();
    },

    getMovieById(movieId) {
        return Movie.findOne({_id: movieId});
    },

    create(movieData) {
        movieData.rating = Number(movieData.rating);
        
        
        
        const movie = new Movie(movieData)


        movie.save();
        return movie;
    }
}