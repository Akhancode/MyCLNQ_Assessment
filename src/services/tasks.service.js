const { CustomError } = require("../utils/errors/error");
const fs = require("fs").promises;
const path = require("path");
const {
  readTasksFromFileFunction,
  writeTasksToFileFunction,
} = require("../utils/helper/helperFunction");
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

const createTask = async (body) => {
  const { title, description, status } = body;
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
      status: status || "pending",
    };

    tasks.push(newTask);
    await writeTasksToFileFunction(tasks, tasksFilePath);

    return newTask;
  } catch (error) {
    throw error;
  }
};

const updateTaskById = async (id, newStatus) => {
  const tasks = await readTasksFromFile();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    throw new CustomError("Task not found", 404);
  }
  tasks[taskIndex].status = newStatus;
  await writeTasksToFileFunction(tasks, tasksFilePath);
  return tasks[taskIndex];
};
const deleteTaskById = async (id) => {
  const tasks = await readTasksFromFile();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    throw new CustomError("Task not found", 404);
  }
  //removing that index task
  tasks.splice(taskIndex, 1);

  await writeTasksToFileFunction(tasks, tasksFilePath);
  return "Task deleted successfully";
};

module.exports = {
  createTask,
  readTasksFromFile,
  updateTaskById,
  deleteTaskById,
};
