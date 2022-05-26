const Film = require("./model");

exports.addFilm = async (filmObj) => {
    try {
        const response = Film.create(filmObj);
        // const newFilm = new Film(filmObj);
        // newFilm.save();
        //--create a film entry based on the model we have defined.
        console.log(response);

    } catch (error) {
        console.log(error)
    }
}