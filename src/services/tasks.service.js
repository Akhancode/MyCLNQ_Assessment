const { CustomError } = require("../utils/errors/error");
const fs = require("fs").promises;
const path = require("path");
const { readTasksFromFileFunction, writeTasksToFileFunction } = require("../utils/helper/helperFunction");
const { v4: uuidv4 } = require("uuid");

const tasksFilePath = path.join(__dirname, "..", "data", "tasks.json");

const readTasksFromFile = async () => {
  try {
    const data = await readTasksFromFileFunction(tasksFilePath);
    return data;
  } catch (error) {
    throw error;
  }
};


const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    // Validation
    if (!title || !description) {
      throw new CustomError("Title and description are required", 400);
    }
    const tasks = await readTasksFromFileFunction(tasksFilePath);
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: status || "pending", // Default status is 'pending'
    };

    tasks.push(newTask);
    await writeTasksToFileFunction(tasks,tasksFilePath);

    return { message: "Task created successfully", task: newTask };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
  readTasksFromFile,
};
