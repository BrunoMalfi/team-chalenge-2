const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController.js");

router.post("/",TaskController.create);
router.get("/gettaskbyid/:_id", TaskController.getById);
router.get("/getall", TaskController.getAll);
router.put("/update/:_id", TaskController.update);
router.delete("/delete/:_id", TaskController.delete);
router.get("/gettasksbytitle/:title", TaskController.getTasksBytitle);
module.exports = router;