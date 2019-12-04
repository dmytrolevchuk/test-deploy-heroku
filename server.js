const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");


const users = require("./routes/users");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/users", users);

const port = process.env.PORT || 5000;

let server = app.listen(port, () =>
    console.log(`Server running on port ${port}`)
);

// console.log(process.env.NODE_ENV);
module.exports = server;