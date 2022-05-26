const mongoose = require("mongoose");

//--the following block is a template for any data we pass to the db.

//--data must be passed within the parameters of this template.

//--extra information will not be saved/stored outside of title
//and actor. If no actor is given there is a default value instead.

const filmSchema = new mongoose.Schema({
    title:  {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    }
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;