//tasks controller
const { CustomError } = require("../utils/errors/error");
const taskServices = require("../services/tasks.service");
const fs = require("fs");
const path = require("path");

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskServices.readTasksFromFile();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};
exports.createTask = async (req, res, next) => {
  try {
    const task = await taskServices.createTask(req.body);
    res.status(200).json({ message: "Task created successfully", task: task });
  } catch (error) {
    next(error);
  }
};
exports.updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id || null;
    const status = String(req.body?.status)?.toLowerCase() || null;
    if (!taskId) {
      throw new CustomError("Required Task id in Params",400);
    }
    if (!status || !["pending", "completed"].includes(status)) {
      throw new CustomError("Required status in request body (confirm spelling)",400);
    }
    const updatedTask = await taskServices.updateTaskById(taskId, status);
    res.status(200).json({
      message: "Task status updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};
