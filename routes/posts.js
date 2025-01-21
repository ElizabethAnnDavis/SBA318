const express = require("express");
const router = express.Router();

const posts = require("../data/posts");

router
    .route('/')
    .get((req, res) => {
        console.log("POSTS: ");
        console.log(posts);
        res.json(posts);
    });

module.exports = router;