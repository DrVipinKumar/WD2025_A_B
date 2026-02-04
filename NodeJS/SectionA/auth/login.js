const express = require("express");
const loginRouter = express.Router();

loginRouter.get("/", (req,res) => {
    res.status(200).json({ error: "User not found!" });
})
module.exports = loginRouter;