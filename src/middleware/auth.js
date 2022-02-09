const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const auth = async (req, res, next)=>{
    try{
        const token = req.header('Authorization').replace("Bearer ", "").trim();
        console.log(token);
        const decoded = jwt.verify(token, `${process.env.SECRET_PASS}`);
        const user = await User.findOne({_id: decoded._id, "tokens.token": token });
        if (!user){
            throw new Error("user not found");
        }
        req.token = token;
        req.user = user;
        console.log( user );
        next();
    }catch(e){
        console.log(e);
        res.status(401).send({message: "Please Authenticate"});
    }

}

module.exports = auth;