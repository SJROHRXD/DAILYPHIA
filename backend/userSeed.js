const mongoose = require('mongoose');
const connectDB = require('./db');
const User = require('./models/userModel');
const bcrypt = require('bcryptjs');

connectDB();

const userSeed = [
    {
        username: "testUser1",
        email: "test1@example.com",
        password: bcrypt.hashSync("test123", 10),
    },
    {
        username: "testUser2",
        email: "test2@example.com",
        password: bcrypt.hashSync("test123", 10),
    },
    // Add more test users
];

const seedUserDatabase = async () => {
    try {
        await User.deleteMany({});
        const createdUsers = await User.insertMany(userSeed);
        console.log('User database seeded!');
        console.log('User IDs:', createdUsers.map(user => user._id));
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedUserDatabase();
