import Cast from "../models/Cast.js"

export default {
    getAll(filter = {}) {
        let query = Cast.find();

        if (filter.includes) {
            query = query.in("_id", filter.includes);
            // query = query.find({_id: {$in: filter.includes}});
        }


        if (filter.excludes) {
            query = query.nin("_id", filter.excludes);
        }

        return query;
    },
    create(castData) {
        return Cast.create(castData);
    }
}