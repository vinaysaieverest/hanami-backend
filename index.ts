const mongoose = require("mongoose");
const express = require("express");
const { Data } = require("./model");
const { data } = require('./data');
const a = require('./routes');
const cors = require('cors');


const app = express();
app.use(cors());

async function connection() {
    try {
        await mongoose.connect("mongodb://localhost/RadhaKrishna", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database");
    } catch (err) {
        console.error("Error connecting to the database", err);
    }
}


const queries = async () => {
    try {
        app.use('/api', a);
    } catch (err) {
        console.log(err);
    }
};



// function start() {

// }
connection();

queries();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
