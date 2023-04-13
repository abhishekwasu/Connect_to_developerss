const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db);


        console.log("mongodb connected to our database....")
    } catch (err) {
        console.error(err.message);
        //exit process with faliure
        process.exit(1);
    }
}

module.exports = connectDB;