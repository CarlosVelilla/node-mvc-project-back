const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "The first name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      require: [true, "The last name is required"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    password: {
      type: String,
      require: [true, "The password is required"],
      minlength: [8, "The password is too short"],
    },
  },
  { timestamps: true },
);

// UserSchema.pre("save", async function passwordPreSave(next) {
//   if (!this.isModified("password")) {
//     return next();
//   }

//   try {
//     const hash = await bcrypt.hash(this.password, 12);
//     this.password = hash;
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

// UserSchema.methods.comparePassword = function comparePassword(candidate) {
//   return bcrypt.compare(candidate, this.password);
// };

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;
