const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("Welcome to User");
})

userRouter.get("/info/:uid", (req, res) => {
    const { uid } = req.params;
    res.send(`Welcome to User have User ID=${uid}`);
})

module.exports = userRouter;