const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

//const error = require("./utilities/error");

// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Use our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

// 404 middleware.
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});

app.listen(PORT, () => {
    console.log(`Server currently running on PORT ${PORT}`);
});