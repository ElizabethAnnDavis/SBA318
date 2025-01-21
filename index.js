const express = require('express');
const app = express();
const PORT = 3000;

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

//const error = require("./utilities/error");

// Use our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

app.listen(PORT, () => {
    console.log(`Server currently running on PORT ${PORT}`);
});