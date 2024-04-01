import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required!"],
    unique: [true, "email already exist!"],
  },
  username: {
    type: String,
    required: [true, "Username is required !"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

/*
 * the "models" is provided by mongoose library and stores all the registered models
 * if a model name "User" already exists in models  object, it assigns that existing model to the User variable.
 * this prevents redefining the model and existing model is reused
 * if a model named "User" does not exist in "models" object, the "model" function from mongoose is called to create a new model
 */

// * all of this is because this route is called everytime the connection is established and everything will be done from scratch
// * so to prevent the process of redefining our user model we are using "models"  object

const User = models.User || model("User", UserSchema);
export default User;
