const mongoose = require("mongoose");

// Default Task Model
// aka DefTask Model
const deftaskSchema = new mongoose.Schema({
    deftaskname: { type: String, required: true },
    deftaskdescription: { type: String, required: true },
    deftaskdate: { type: Date, required: true },
    // More Fields
});

// Compile DefTask Model
const DefTask = mongoose.model("DefTask", userSchema);

// Export DefTask Model
module.exports = DefTask;