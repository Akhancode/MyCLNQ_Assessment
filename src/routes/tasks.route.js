const express = require("express");
const router = express.Router();
const {
createTask,getAllTasks,
updateTask
} = require("../controllers/tasks.controller");

router.post("/", createTask);
router.get("/", getAllTasks);
router.put("/:id", updateTask);


// router.get("/:id", getHabitById);

// router.put("/:id", updateHabit);

// router.delete("/:id", deleteHabit);

module.exports = router;
