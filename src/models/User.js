const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SavedComponent = require("./savedComponent")
require('dotenv').config();


//User schema 
const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error("Password is not strong enough");
      }
    },
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  tokens:[
    {
      token: {
        type: String,
        required: true,
      }
    }
  ]
});

userSchema.virtual('savedComponents', {
  ref: "SavedComponent",
  localField: "_id",
  foreignField: "owner",
})

// Hiding the password and the tokens from the users
userSchema.methods.toJSON = function(){
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
}

//generate auth token for the user
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString()}, `${process.env.SECRET_PASS}`);
  
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
};

//Find user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};


//Hash the palin text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//Delete user components when user is removed
userSchema.pre('remove', async function(){
  const user = this;
  await SavedComponent.deleteMany({owner: user._id});
  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;
