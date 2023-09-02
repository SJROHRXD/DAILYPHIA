// seed.js
const mongoose = require('mongoose');
const connectDB = require('./db');
const YourModel = require('./models/YourModel');

connectDB();

const seedData = [
  // Your seed data here
];

const seedDatabase = async () => {
  try {
    await YourModel.deleteMany({});
    await YourModel.insertMany(seedData);
    console.log('Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
