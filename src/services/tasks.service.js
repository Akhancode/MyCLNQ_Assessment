const { CustomError } = require("../utils/errors/error");
const fs = require("fs").promises;
const path = require("path");
const tasksFilePath = path.join(__dirname, "..", "data", "tasks.json");
const readTasksFromFile = async () => {
  try {
    const data = await fs.readFile(tasksFilePath, "utf-8");
    return JSON.parse(data || "[]"); 
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("JSON file not found");
    }
    throw error; 
  }
};
const writeTasksToFile = async (tasks) => {
  try {
    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    throw error;
  }
};

// Create Task Controller (async)
const createTask = async (req, res) => {
  const { title, description, status } = req.body;

  // Validation
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  try {
    const tasks = await readTasksFromFile();
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: status || "pending", // Default status is 'pending'
    };

    tasks.push(newTask);
    await writeTasksToFile(tasks);

    res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

module.exports = {
  createTask,
  readTasksFromFile,
};
