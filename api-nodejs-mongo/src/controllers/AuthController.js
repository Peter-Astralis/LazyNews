require('dotenv').config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const usermodel = require("../models/user");
const router = express.Router();
const generatetoken = (user = {}) => {
    return jwt.sign(
        {
        id: user.id,
        name: user.name,
        }, 
        authConfig.secret, 
        {
        expiresIn: 60,
        }
      );
}


router.post("/register", async(req, res) => {

    const {email} = req.body;

    if(await usermodel.findOne({email})){
        return res.status(400).json({
            error: true,
            message:"User Already Exists",
        });
    }

    const user = await usermodel.create(req.body);

    user.password = undefined;

     
    return res.json({
        user,
        token: generatetoken(user),

    });

}); 

router.post("/authenticate", async(req, res) => {

    const {email, password} = req.body;
    

    const user = await usermodel.findOne({email}).select("+password");
    
    if(!user){
        return res.status(400).json({
            error: true,
            message: 'User not found',
        });
    }

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400). send({

            error: true,
            message: 'Invalid Password',

        });
        
    }
    

    user.password = undefined;

    return res.json({
        user,
        token: generatetoken(user)
    
    });
});

module.exports = router;

