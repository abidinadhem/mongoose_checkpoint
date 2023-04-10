const mongoose = require("mongoose"); // import the Mongoose library

const personSchema = new mongoose.Schema({ // create a new schema for the Person model
    name: {
        type: String,
        required: true, // name is a required field
    },
    age: Number, // age is a number field
    favoriteFoods: [String], // favoriteFoods is an array of strings
});

const Person = mongoose.model("Person", personSchema); // create a new Mongoose model based on the schema

module.exports = Person; // export the Person model so it can be used in other parts of the application
