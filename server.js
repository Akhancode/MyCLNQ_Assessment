require("dotenv").config();
const { monitor_api } = require("./src/middleware/monitor-api.js");

const cors = require("cors");
const express = require("express");
const routes = require("./src/routes/index.js");
const swaggerui = require("swagger-ui-express");
const YAML = require("yamljs");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

// Use cors for all routes
app.use(cors());

app.use(bodyParser.json());

// SWAGGER MIDDLEWARE FOR DOCUMENTATION
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

// Logs middleware
app.use(monitor_api);

//routes
app.use("/api", routes);

// global error handling middleware
app.use((err, req, res, next) => {
  console.log(err)
  const statusCode = err.statusCode || err.code || 500;
  console.error({ message: err.message || err, code: statusCode });
  res.status(statusCode).json({ message: err.message || err });
  return;
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
