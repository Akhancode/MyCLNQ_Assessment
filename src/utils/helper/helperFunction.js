const fs = require("fs");
const path = require("path");
//path for data - tasks.json
const tasksFilePath = path.join(__dirname, "..","..", "data", "tasks.json");

module.exports = { writeTasksToFile , tasksFilePath };
