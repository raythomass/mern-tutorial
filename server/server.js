const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

app.use(express.json());

mongoose.connect(
    `mongodb+srv://rthomasdeveloper:Hockey$11@mern-tut-cluster0.mcjkt.mongodb.net/`
);

app.get("/getUsers", (req, res) => {
    UserModel.find({})
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500, 400).json(err)
        });
});

app.post("/createUser", async (req, res) => {
   const user = req.body;
   const newUser = new UserModel(user);
   await newUser.save();

   res.json(user);
})

app.listen(3001, () => {
    console.log("SERVER IS RUNNING")
});