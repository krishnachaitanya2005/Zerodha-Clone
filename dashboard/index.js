require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

app.listen(8080, () => {
	console.log("App started!");
	mongoose.connect(url);
	console.log("DB connected!");
});
