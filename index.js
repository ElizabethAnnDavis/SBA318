const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

const error = require("./utilities/error");

// Parsing MiddleWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//  Logging Request MiddleWARE
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Use our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

// 404 MiddleWARE.
app.use((err, req, res, next) => {
    console.log("Something went wrong");
    res.send("Something went wrong");
});

app.listen(PORT, () => {
    console.log(`Server currently running on PORT ${PORT}`);
});