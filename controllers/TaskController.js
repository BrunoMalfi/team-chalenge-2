const Task = require("../models/Task.js");
const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create({
                ...req.body,
            });
            res.status(201).send({msg:"task created : ",task});
        } catch (error) {
            res.send(error);
        }
    },
    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const task = await Task.find()
                .limit(limit)
                .skip((page - 1) * limit);
            res.send(task);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                msg: "There was an issue finding the tasks",
            });
        }
    },
    async getById(req, res) {
        try {
          const task = await Task.findById(req.params._id);
          res.send(task);
        } catch (error) {
          console.error(error);
        }
      },
      async update(req, res) {
        try {
          const task = await Task.findByIdAndUpdate(
            req.params._id,
            {...req.body},
            { new: true }
          );
          console.log(task);
          res.send({ msg: "Task successfully updated", task });
        } catch (error) {
          console.error(error);
        }
      },
      async getTasksBytitle(req, res, next) {
        try {
            const task = await Task.find({
                $text: {
                    $search: req.params.title,
                },
            });
            res.send({ msg: "found tasks", task });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                msg: `There was an issue finding the task with title ${req.params.title} `,
            });
        }
    },
    async delete(req, res) {
        try {
          const task = await Task.findByIdAndDelete(req.params._id);
          res.send({ msg: "Task deleted", task });
        } catch (error) {
          console.error(error);
          res.status(500).send({ msg: "There was a problem trying to remove the task" });
        }
      },
};
module.exports = TaskController;
