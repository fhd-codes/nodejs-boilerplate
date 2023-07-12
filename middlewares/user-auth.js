// importing modules
const express = require("express");
const db = require("../models");

// Assigning db.users to User variable
 const User = db.users;

// Function to check if username or email already exist in the database
// this is to avoid having two users with the same username and email
 
const checkExistance = async (req, res, next) =>{
    try{
        // checking if the username already exist
        const username = await User.findOne({
            where: {
            username: req.body.username,
            },
        });

        if (username){ return res.json(409).send("username already taken"); }

        // checking if email already exist
        const emailcheck = await User.findOne({
            where: {
            email: req.body.email,
            },
        });

        if (emailcheck) { return res.json(409).send("Authentication failed"); }

    next(); // used in middleware functions to pass control from one middleware function to the next in the stack

    } 
    catch (error) {
        console.log(error);
    }
};

//exporting module
 module.exports = {
 checkExistance,
};