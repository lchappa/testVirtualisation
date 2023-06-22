const express = require('express');
const router = express.Router();
const userRepository = require('../Repository/userRepository');
const User = require("../Model/User");

router.post('/', async (req, res) => {
    let newUser = new User(null, req.body.userName, req.body.password);
    res.send(await userRepository.create(newUser));
})

router.get('/', async (req, res) => {
    res.send(await userRepository.getAll());
})

module.exports =  router;




