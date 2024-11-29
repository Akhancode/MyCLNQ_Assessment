const express = require("express");
const router = express();

const tasksRoute = require("./tasks.route");

router.use("/tasks",tasksRoute);



module.exports = router;
