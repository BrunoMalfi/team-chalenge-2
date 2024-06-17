const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for this task"],
        },
        completed:{type:Boolean},
        description: {
            type: String,
            required: [true, "Please provide a description for this task"],
        },
        priority: {
            type: String,
            required: [true, "Please provide a priority for this task"],
        },
    },
    { timestamps: true },
);
TaskSchema.index({
    title: "text",
});

const task = mongoose.model("Task", TaskSchema);

module.exports = task;