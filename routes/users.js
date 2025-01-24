const express = require("express");
const router = express.Router();

const users = require("../data/users");

router
    .route('/')
    .get((req, res) => {
        console.log("USERS: ");
        console.log(users);
        res.json(users);
    })
    .post((req, res, next) => {
        if(req.body.name && req.body.username && req.body.email){
            if(users.find((u) => u.username == req.body.username)){
                console.log(`ERROR: Username ${req.body.username} already in use`);
                res.json({error: `Username ${req.body.username} already in use`});
                return;
            };
            const user = {
                id: users[users.length - 1].id + 1,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email
            };
            users.push(user);
            res.status(201).json(user);
            console.log(user);
        }else{
            console.log(`ERROR: Insufficient Data`);
            res.json({error: `Insufficient Data`});
            next(err);
        };
    });

router
    .route('/:id')
    .get((req, res, next) => {
        const user = users.find((u) => u.id == req.params.id);
        if(user){
            console.log(`USER ${req.params.id}:`);
            console.log(user);
            res.json(user);
        }else{
            console.log("/:id else clause");
            next(err);
        } 
    })
    .patch((req, res, next) => {
        const user = users.find(u => u.id == req.params.id);
        if(user){
            for(const key in req.body){
                user[key] = req.body[key];
            };

            console.log(`USER:`);
            console.log(user);
            res.json(user);
        }else next(err);
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
        }else next(err);
    });

module.exports = router;