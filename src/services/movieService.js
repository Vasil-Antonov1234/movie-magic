import Movie from "../models/Movie.js"

export default {
    getAll(filter) {
        // return await Movie.find(filter).lean();
        let query = Movie.find();


        if (filter.title) {
            query = query.find({ title: { $regex: filter.title, $options: "i"}});
        }

        if (filter.genre) {
            query = query.find({ genre: { $regex: new RegExp(`^${filter.genre}$`), $options: "i" }})
            // query = query.find({ genre: { $regex: "/${filter.genre}/i" } });
        }

        if (filter.year) {
            // result = result.find({ year: filter.year});
            query = query.where("year").equals(filter.year);
        }

        return query;
    },

    getMovieById(movieId) {
        // return Movie.findOne({_id: movieId});

        return Movie.findById(movieId);
    },

    create(movieData) {
        movieData.rating = Number(movieData.rating);
        
        // const movie = new Movie(movieData)
        // movie.save();
        // return movie;



        
        return Movie.create(movieData);
    }
}