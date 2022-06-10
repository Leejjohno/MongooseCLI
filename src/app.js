require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addFilm, list, find, updateOne, deleteFilm } = require("./movie/functions");


const app = async (yargsObj) => {
    console.log(yargs.argv)
    if (yargsObj.add) {
        
        await addFilm({ title: yargsObj.title, actor: yargsObj.actor });
       
        //add film to database from yargs input

    } else if ( yargsObj.list ) {

        await list({ yargsObj });
        //list films

    } else if ( yargsObj.find ) {

        await find({ title: yargsObj.title }) ;
        //find film

    } else if ( yargsObj.update ) { //we define our yargs object command as update

        await updateOne({ title: yargsObj.title[0] }, {title: yargsObj.title[1] })
        //update a film

    } else if ( yargsObj.delete ) {

        await deleteFilm({ title: yargsObj.title });
        //delete a film

    } else {
        console.log("Incorrect command");
    }
    await mongoose.disconnect();
};

app(yargs.argv);