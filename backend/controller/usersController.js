const mongoose = require('mongoose')

const Users = require('../models/usersModel')

//add users
const createUser = async(req, res)=>{
    const {name, password, email} = req.body;
    try {
        const users = await Users.create({name, password, email});
        res.status(200).json(users);


    } catch{
        res.status(400).json({error: error.message})
    }
}

module.exports = createUser;