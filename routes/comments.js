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
    .post((req, res) => {

    })
    .patch((req, res) => {

    })
    .delete((req, res) => {

    });

module.exports = router;