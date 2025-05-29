//Require the Dotenv Library
//const dotenv = require("dotenv").config();

//Development Environment
const development = {
	name: 'development',
	db: 'mongodb://localhost/todo_list',
	db_name: 'As per the MongoDB DB Name',
	deployment: 'local',
};

//Production Environment

module.exports = development;
