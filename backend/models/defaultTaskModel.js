const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Default Task Model
// aka DefTask Model
const defTaskSchema = new Schema({
    defTaskName: { 
        type: String, 
        required: true 
    },
    defTaskDes: { 
        type: String, 
        required: true 
    },
    defDueDate: { 
        type: Date, 
        required: true 
    },
    // Add cloning feature
});

// Compile DefTask Model
const DefTask = mongoose.model("DefTask", defTaskSchema);

// Export DefTask Model
module.exports = DefTask;