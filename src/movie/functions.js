const Film = require("./model");

exports.addFilm = async (filmObj) => { //create a new entry
    try {
        const response = await Film.create(filmObj);
        //--create a film entry based on the model we have defined.

        console.log(response); //console log the status of the await.

    } catch (error) { //catch errors
        console.log(error) //then console log them
    }
}

exports.list = async (filmObj) => {
    try {
        const response = await Film.find(filmObj);
        //--search for a film

        console.log(response);

    } catch (error) { //catch errors
        console.log(error) //then console log them
    }
}

exports.updateFilm = async (filmObj) => {
    try {
        const response = await Film.updateOne(filmObj);
    }
}