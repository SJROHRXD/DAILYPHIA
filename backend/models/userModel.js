const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    // More Fields
});

// Compile User Model
const User = mongoose.model("User", userSchema);

// Export User Model
module.exports = User;
