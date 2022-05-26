require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addFilm } = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.add) {
        
        await addFilm({ title: yargsObj.title, actor: yargsObj.actor })
        //add film to database from yargs input

    } else if (yargsObj.list) {
        //find films

    } else if (yargsObj.update) {
        //update a film

    } else if (yargsObj.delete) {
        //delete a film

    } else {
        console.log("Incorrect command");
    }
    await mongoose.disconnect();
}

app(yargs.argv);