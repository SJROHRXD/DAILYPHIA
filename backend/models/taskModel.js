const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Task Model
const taskSchema = new Schema({
    taskName: { 
        type: String, 
        required: true 
    },
    taskDes: { 
        type: String, 
        required: true 
    },
    dueDate: { 
        type: Date, 
        required: true 
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' }
    // More Fields
});

// Compile Task Model
const Task = mongoose.model("Task", taskSchema);

// Export Task Model
module.exports = Task;