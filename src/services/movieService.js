import Movie from "../models/Movie.js"
import Cast from "../models/Cast.js";

export default {
    getAll(filter = {}) {
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
            // query = query.find({ year: filter.year});
            query = query.where("year").equals(filter.year);
        }

        return query;
    },

    getMovieById(movieId) {
        // return Movie.findOne({_id: movieId});

        return Movie.findById(movieId);
    },

    getMovieByIdDetailed(movieId) {
        return this.getMovieById(movieId).populate("casts");
    },

    create(movieData, userId) {
        // movieData.rating = Number(movieData.rating);
        
        // const movie = new Movie(movieData)
        // movie.save();
        // return movie;

        return Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            creator: userId
        });
    },

    async attach(movieId, castId) {
        // Add relation method #1
        const movie = await Movie.findById(movieId);
        movie.casts.push(castId);

        return movie.save();

        // Add relation method #2
        // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    },

    delete(movieId) {
       
        return Movie.findByIdAndDelete(movieId);
    },

    edit(movieData, movieId) {
        return Movie.findByIdAndUpdate(movieId, movieData); 
    }

}