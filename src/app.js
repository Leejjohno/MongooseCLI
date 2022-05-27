require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addFilm, list, updateFilm, deleteFilm } = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.add) {
        
        await addFilm({ title: yargsObj.title, actor: yargsObj.actor });
       
        //add film to database from yargs input

    } else if (yargsObj.list) {

        await list({ title: yargsObj.title, actor: yargsObj.actor });
        //list films

    } else if (yargsObj.update) {

        await updateFilm({ title: yargsObj.title, actor: yargsObj.actor });
        //update a film

    } else if (yargsObj.delete) {

        await deleteFilm({ title: yargsObj.title });
        //delete a film

    } else {
        console.log("Incorrect command");
    }
    await mongoose.disconnect();
};

app(yargs.argv);