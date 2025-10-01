import { Router } from "express";
import userService from "../services/userService.js";

const authController = Router();



authController.get("/register", (req, res) => {
    res.render("auth/register");
});

authController.post("/register", async (req, res) => {
    const userData = req.body;
    
    await userService.register(userData);

    res.redirect("/login");
});

authController.get("/login", (req, res) => {
    res.render("auth/login");
});

authController.post("/login", async (req, res) => {
    const token = await userService.login(req.body);

    res.cookie("auth", token);

    res.redirect("/");
})


export default authController;