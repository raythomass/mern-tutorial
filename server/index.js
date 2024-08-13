const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGOPASS = import.meta.env(MONGOPASS);

mongoose.connect(
    `mongodb+srv://rthomasdeveloper:${MONGOPASS}@mern-tut-cluster0.mcjkt.mongodb.net/`
);

app.listen(3001, () => {
    console.log("SERVER IS RUNNING")
});