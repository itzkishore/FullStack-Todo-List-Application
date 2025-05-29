//Require the Dotenv Library

//Require the Mongoose Library
const mongoose = require("mongoose");
//Require the Environment File for getting the Environment Variables
//const env = require("../.env");

let db;

//If the Environment is Development
const Development = async () => {
	try {
		//Connect to the Database
		mongoose.connect('mongodb://localhost/todo_list');
		//Acquire the Connection
		db = mongoose.connection;
		//If Error
		db.on("error", console.error.bind(console, "Connection Error"));
		//If Successful
		db.once("open", () => {
			console.log("Connected to MongoDB Successfully");
		});
	} catch (error) {
		//If Error
		console.log(error);
	}
};

//If the Environment is Production
const Production = async () => {
	try {
		const options = { useNewUrlParser: true, useUnifiedTopology: true };
		//Connect to the Database
		await mongoose.connect('mongodb://localhost/todo_list', options);
		//Acquire the Connection
		db = mongoose.connection;
		//If Successful
		console.log("Connected to MongoDB Successfully");
	} catch (error) {
		//If Error
		console.log(error);
	}
};

//Establishes the Connection based on the Environment
const EstablishConnection = async () => {
	try {
		await Development();
		if (!db) console.log("Connection Error");
	} catch (error) {
		console.log(error);
	}
};

EstablishConnection();

//Export the Connection
module.exports = db;
