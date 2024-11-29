const express = require("express");
const router = express();

const habitRoute = require("./habit.route");

router.use("/habit",habitRoute);



module.exports = router;
