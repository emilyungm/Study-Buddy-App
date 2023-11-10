const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const fs = require("fs");
const path = require('path');


/**
 * Creates a new express application under the name "app"
 * @constant
 */
const app = express();

/**
 * allow for html rendering from js file data, setup the view Engine
 */
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/**
 * Port number that the app runs on
 */
const PORT_NUMBER = 8080;

const taskCont = require('./controllers/task-controller');


/**
 * URL to access the mongoDB database
 * @const
 */
const url = "mongodb://127.0.0.1:27017/StudyBuddy";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("node_modules/bootstrap/dist/css"));
app.use(express.static('images'));


app.use(express.static(path.join(__dirname,"/dist/study-buddy")));

app.listen(PORT_NUMBER, async function () {
	console.log(`running on http://localhost:${PORT_NUMBER}`);
});

/**
 * Function to connect the app to the MongoDB so we can access the server
 * @param {*} url 
 * @returns "Connected successfully" once its connected
 */
async function connect(url) {
	await mongoose.connect(url);
	return "Connected Successfully";}
connect(url).then(console.log).catch((err) => console.log(err));

app.post("/add-task", taskCont.newTask);
