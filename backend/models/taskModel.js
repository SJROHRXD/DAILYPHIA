const mongoose = require("mongoose");

// Task Model
const taskSchema = new mongoose.Schema({
    taskname: { type: String, required: true },
    taskdescription: { type: String, required: true },
    taskdate: { type: Date, required: true },
    // More Fields
});

// Compile Task Model
const Task = mongoose.model("Task", userSchema);

// Export Task Model
module.exports = Task;