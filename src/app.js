const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send("User data fetch successfully");
});

app.post("/user", (req, res) => {
  // Data saved to DB in this step
  res.send("User data posted successfully");
});

app.patch("/user", (req, res) => {
  res.send("User data modified successfully");
});

app.delete("/user", (req, res) => {
  res.send("User data deleted successfully");
});

app.use("/dashboard", (req, res) => {
  res.send("Hello from dashboard!");
});

app.use("/", (req, res) => {
  res.send("Hello from server end!");
});
app.listen("1919", () => {
  console.log("Server is successfully listening on port 1919...");
});
