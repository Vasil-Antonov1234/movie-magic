import { Router } from "express";

const castController = Router();

castController.get("/", (req, res) => {
    res.send("Test cast page");
})



export default castController;