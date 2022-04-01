const express = require('express');
const app = express();
const mysql = require('mysql');
const _ = require('lodash');

const server = app.listen(3000, () => {
    console.log("node js was running")
})



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ring"
})
db.connect(function(err) {
    if (err) throw err;
    console.log("connected")
})


module.exports = app;