const mongoose = require("mongoose");
const validator = require("validator");


const Component = mongoose.model("Component", {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  
    details: {
      description: {
        type: String,
        required: true,
        minLength: 10,
      },
      Price: {
        type: Number,
        validate(value) {
          if (value < 0) throw new Error("Price most be positive number");
        },
        required: true,
      },
      discount: {
        type: Number,
        default: 0,
      },
      array: {
        type: [String],
        minItems: 2,
      },
      phone: {
        type: String,
        validate(value) {
          if (!validator.isMobilePhone(value, "he-IL"))
            throw Error("not valid phone number");
        },
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  });


module.exports= Component;