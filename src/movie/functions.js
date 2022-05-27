const Film = require("./model");

exports.addFilm = async (filmObj) => { //create a new entry
    try {
        const response = await Film.create(filmObj);
        //--create a film entry based on the model we have defined.

        console.log(response); //console log the status of the await.

    } catch (error) { //catch errors
        console.log(error) //then console log them
    }
};

exports.list = async (filmObj) => {
    try {
        const response = await Film.find({filter: filmObj});
        //--search for a film

        console.log(response);

    } catch (error) { //catch errors
        console.log(error) //then console log them
    }
};

exports.updateFilm = async (filmObj) => {
    try {
        const response = await Film.updateOne({filter: filmObj});
        //--update a film record

        console.log(response);

    } catch (error) { //catch errors
        console.log(error) //then console logs them
    }
};

exports.deleteFilm = async (filmObj) => {
    try {
        const response = await Film.findOneAndDelete({filter: {title: filmObj.title}}, {query: {title: filmObj.title}});
        //--delete a film record

        console.log(response);


    } catch (error) { //catch errors
        console.log(error) //then console logs them
    }
};