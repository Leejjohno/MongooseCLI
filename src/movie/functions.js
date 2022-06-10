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
        const response = await Film.find({filmObj});
        //--list all entries on the database

        console.log(response);

    } catch (error) { //catch errors
        console.log(error) //then console log them
    }
};

exports.find = async ( filmObj ) => {
    try {
        const response = await Film.findOne({ title: filmObj.title })
        //--search for one film by title

        console.log(response);

    } catch (error) {
        console.log(error)
    }
};

exports.updateOne = async ( filterObj, filmObj ) => {
    console.log(filterObj, filmObj)
    try {
        // const filter = { title: filterObj.update };
        // const response = await Film.updateOne({
        //     filter: filterObj = await Film.findOne({ title: filterObj.title }), // this is my filter query, this is what we type in to search for to edit
        //     update: filmObj = filterObj // generalise so that I can update the entire film object
        // });

        const response = await Film.updateOne( filterObj, filmObj )

        //--update a film record

        console.log(response);

    } catch (error) { //catch errors
        console.log(error) //then console logs them
    }
};

exports.deleteFilm = async ( filterObj, filmObj ) => {
    try {
        const response = await Film.deleteOne( filterObj, filmObj )

        //--delete a film record

        console.log(response);


    } catch (error) { //catch errors
        console.log(error) //then console logs them
    }
};