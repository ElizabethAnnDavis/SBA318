const express = require("express");
const router = express.Router();

const users = require("../data/users");

router
    .route('/')
    .get((req, res) => {
        console.log("USERS: ");
        console.log(users);
        res.json(users);
    });

module.exports = router;