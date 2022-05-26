require("dotenv").config();
const mongoose = require("mongoose");

//Provided that this is the first function that runs,
//I can manipulate my database from anywhere in the app
// --I need to call this function at the start of app.js

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    } catch (error) {
        console.log(error);
    }
};

connection();