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
    /*.post((req, res) => {

    })
    .patch((req, res) => {

    })
    .delete((req, res) => {

    });*/

router
    .route('/:id')
    .get((req, res, next) => {
        const user = users.find((u) => u.id == req.params.id);
        if(user){
            console.log(`USER ${req.params.id}:`);
            console.log(user);
            res.json(user);
        }else next();
    })
    .delete((req, res, next) => {
        const user = users.find((u, i) => {
            if(u.id == req.params.id){
                users.splice(i, 1);
                return true;
            };
        });
        if(user){
            console.log(`USER ${req.params.id}:`);
            console.log(user);
            console.log("DELETED");
            res.json(user);
        }else next();
    });

module.exports = router;