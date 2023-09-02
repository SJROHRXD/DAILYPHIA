// seed.js
const mongoose = require('mongoose');
const connectDB = require('./db');
const DefTask = require("./models/defaultTaskModel");

connectDB();

const defTaskSeed = [
  {
      defTaskName: "Brush Teeth - AM",
      defTaskDes: "Brush teeth in the morning.",
      owner: "testUser", // Replace with an actual user ID from your DB
  },
  {
      defTaskName: "Skin Care - AM",
      defTaskDes: "Wash face and apply sunscreen in the morning.",
      owner: "testUser", // Replace with an actual user ID from your DB
  },
  // More Tasks
];

const seedDatabase = async () => {
  try {
    // Leave for testing but remove when deploying
    await DefTask.deleteMany({});

    // Insert seed data
    await DefTask.insertMany(defTaskSeed);

    console.log('Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Seed dailyphia_db
seedDatabase();
