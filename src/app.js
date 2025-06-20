const express = require("express");
const connectDB = require("./config/database");
const app = express();

async function run() {
  try {
    await connectDB();
    console.log("connected to DB...");
    app.listen("1919", () => {
      console.log("Server is successfully listening on port 1919...");
    });
  } catch (e) {
    console.log("Error connecting to DB...");
  }
}
run();
