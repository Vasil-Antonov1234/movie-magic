import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";

import routes from "./routes.js";
import cookieParser from "cookie-parser";
import authMiddleware from "./middlewares/authMiddleware.js";

const app = express();

const url = "mongodb://localhost:27017";

try {
    await mongoose.connect(url, {
        dbName: "movie-magic"
    });

    console.log("Successfully connected to DB")
} catch (error) {
    console.error("Can not connect to DB, ", error.message);
}



app.engine("hbs", handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}));

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("src/public"));
app.use(express.urlencoded());

app.use(cookieParser());

app.use(authMiddleware)

app.use(routes);

app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."));