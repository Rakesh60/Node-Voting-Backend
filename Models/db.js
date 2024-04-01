const express = require('express');
const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/votingapp";

async function connectToMongoDB(options = {}) {
  try {
    await mongoose.connect(uri, options);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application on connection failure
  }
}

// Export the connectToMongoDB function
module.exports = connectToMongoDB;
