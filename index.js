const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const { dbConnection } = require("./config/config");
const cors = require('cors');

app.use(express.json());
app.use(cors());


dbConnection();

app.use("/tasks", require("./routes/tasks.js"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;