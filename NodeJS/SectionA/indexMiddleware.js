const express = require("express");
const app = express();


const logging = (req, res, next) => {
    console.log(`You access ${req.path} at ${new Date().toISOString()}`);
    next();
}
app.use(logging);
const filter = (req,res,next) => {
    const { user, pwd } = req.query;
    if (user && pwd) {
        next();
    } else {
        res.redirect("/error");
    }
}
app.get("/product",filter, (req, res) => {
    res.send("<h2>This is product web page.</h2>")
})
app.get("/error", (req,res) => {
    res.send("<h2>Login first!</h2>");
})
app.get("/", (req, res) => {
    res.send("Middleware in Node JS");
}
)
app.get("/info", (req, res, next) => {
    const { user } = req.query;
    if (user) {
        next();
    } else {
        res.locals.user = "Guest";
        next();
    }
}, (req, res) => {
    const { user } = req.query;
    if (user) {
        res.send(`Welcome to ${user}`);
    } else {
        res.send(`Welcome to ${res.locals.user}`);
    }
})


app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else 
    {
        console.log("Running on http://locahost:3000");
    }
})