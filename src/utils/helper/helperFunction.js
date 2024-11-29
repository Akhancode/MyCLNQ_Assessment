const fs = require("fs").promises;
const path = require("path");
//path for data - tasks.json
const tasksFilePath = path.join(__dirname, "..", "..", "data", "tasks.json");

const readTasksFromFileFunction = async (tasksFilePathArg) => {
  try {
    const data = await fs.readFile(tasksFilePathArg, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("JSON file not found");
    }
    throw error;
  }
};
const writeTasksToFileFunction = async (tasks, tasksFilePathArg) => {
  try {
    await fs.writeFile(tasksFilePathArg, JSON.stringify(tasks, null, 2));
  } catch (error) {
    throw error;
  }
};

module.exports = { readTasksFromFileFunction,writeTasksToFileFunction, tasksFilePath };
