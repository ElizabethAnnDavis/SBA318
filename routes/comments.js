const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

router
    .route('/')
    .get((req, res) => {
        console.log("COMMENTS: ");
        console.log(comments);
        res.json(comments);
    })
    .post((req, res, next) => {
        if (req.body.postId && req.body.userId && req.body.content) {
            const comment = {
                id: comments[comments.length - 1].id + 1,
                postId: req.body.postId,
                userId: req.body.userId,
                content: req.body.content,
            };
            comments.push(comment);
            console.log("POST: ");
            console.log(comment);
            res.json(comments[comments.length - 1]);
        }else{
            console.log(`ERROR: Insufficient Data`);
            res.json({error: `Insufficient Data`});
            next(err);
        };
    });

module.exports = router;