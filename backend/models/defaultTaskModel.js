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
    completed: {
        type: Boolean,
        default: false
    },
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    }
});

// Compile DefTask Model
const DefTask = mongoose.model("DefTask", defTaskSchema);

// Export DefTask Model
module.exports = DefTask;