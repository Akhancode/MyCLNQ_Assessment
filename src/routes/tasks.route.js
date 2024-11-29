const express = require("express");
const router = express.Router();
const {
createTask,getAllTasks,
updateTask,
deleteTask,
getAllTasksByStatus
} = require("../controllers/tasks.controller");

router.post("/", createTask);
router.get("/", getAllTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/status/:status", getAllTasksByStatus);


// router.get("/:id", getHabitById);

// router.put("/:id", updateHabit);

// router.delete("/:id", deleteHabit);

module.exports = router;
