const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose =
        require("passport-local-mongoose");
const User = require("./model/User");
var path = require('path');
let app = express();

mongoose.connect("mongodb+srv://kburchett11:Final246@loginsystem.9kr2lp0.mongodb.net/?retryWrites=true&w=majority&appName=LoginSystem");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Group 2 Final",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Showing home page
app.get("/", function (req, res) {
    res.render("home");
});

// Showing register form
app.get("/register", function (req, res) {
    res.render("register");
});

// Handling user signup
app.post("/register", async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    });

    return res.status(200).json(user);
});

// Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});

// Handling user login
app.post("/login", async function (req, res) {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            const result = req.body.password === user.password;
            if (result) {
                res.render("student_dashboard");
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
});

app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/view/student_dashboard");
}


// Showing login form
app.get("/teacher_login", function (req, res) {
    res.render("teacher_login");
});

// Handling user login
app.post("/teacher_login", async function (req, res) {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            const result = req.body.password === user.password;
            if (result) {
                res.render("teacher_dashboard");
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/view/teacher_dashboard");
}

app.get("/student_view_schedule", function (req, res) {
    res.render("student_view_schedule");
});

app.get("/student_dashboard", function (req, res) {
    res.render("student_dashboard");
});

app.get("/student_manage_courses", function (req, res) {
    res.render("student_manage_courses");
});

app.get("/teacher_login", function (req, res) {
    res.render("teacher_login");
});

app.get("/teacher_dashboard", function (req, res) {
    res.render("teacher_dashboard");
});

app.get("/add_course", function (req, res) {
    res.render("add_course");
});

app.get("/teacher_manage_courses", function (req, res) {
    res.render("teacher_manage_courses");
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});