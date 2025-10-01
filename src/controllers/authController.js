import { Router } from "express";

const authController = Router();



authController.get("/", (req, res) => {
    res.send("test");
})


export default authController;