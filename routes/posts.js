const express = require("express");
const router = express.Router();

const posts = require("../data/posts");

router
    .route('/')
    .get((req, res) => {
        console.log("POSTS: ");
        console.log(posts);
        res.json(posts);
    })
    .post((req, res, next) => {
        if (req.body.userId && req.body.title && req.body.content) {
            const post = {
                id: posts[posts.length - 1].id + 1,
                userId: req.body.userId,
                title: req.body.title,
                content: req.body.content,
            };
            posts.push(post);
        }else{
            console.log(`ERROR: Insufficient Data`);
            res.json({error: `Insufficient Data`});
            next();
        };
    });
    /*
    .patch((req, res) => {

    })
    .delete((req, res) => {

    });*/

module.exports = router;