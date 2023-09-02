const mongoose = require("mongoose");

// User Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // More Fields
});

// Compile User Model
const User = mongoose.model("User", userSchema);

// Export User Model
module.exports = User;
