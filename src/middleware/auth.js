const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const auth = async (req, res, next)=>{
    try{
        const token = req.header('Authorization').replace("Bearer ", "");

        const decoded = jwt.verify(token, `${process.env.SECRET_PASS}`);
        const user = await User.findOne({_id: decoded._id, "tokens.token": token });
        if (!user){
            throw new Error("user not found");
        }
        req.token = token;
        req.user = user;
        next();
    }catch(e){
        res.status(401).send({error: "Please Authenticate"});
    }

}

module.exports = auth;