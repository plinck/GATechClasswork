var mongoose = require("mongoose");


// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  //* 1: username: A string that will be be required, and also trimmed.
  username: {
    type: String,
    trim: true,
    required: "username is Required"
  },
  // * 2: password: A string that will be required, trimmed, and at least 6 characters.
  password: {
    type: String,
    trim: true,
    required: "password is Required",
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 6;
      },
      // Error Message
      "password should be 6 char or more."
    ]
  },

  //* 3: email: A string that must be a valid email address and unique in our collection.
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  // `date` must be of type Date. The default value is the current date
  //    * 4: userCreated: A date that will default to the current date.
  date: {
    type: Date,
    default: Date.now
  },

  /* TODO:
   * Add four entries into our schema. These should be:
   *

   *
   * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
   * Use that with the model attribute that checks for a valid match.
   * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
});



// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
