//tasks controller
const { CustomError } = require("../utils/errors/error");
const taskServices = require("../services/tasks.service");
const fs = require("fs");
const path = require("path");

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks =await taskServices.readTasksFromFile()
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};
exports.createTask = async (req, res, next) => {
  try {
    const task =  await taskServices.createTask(req,res)
    res.status(200).json(task);

  } catch (error) {
    next(error);
  }
};
