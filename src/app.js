const express = require("express");

const app = express();

app.use("/dashboard", (req, res) => {
  res.send("Hello from dashboard!");
});

app.use((req, res) => {
  res.send("Hello from server end!");
});
app.listen("1919", () => {
  console.log("Server is successfully listening on port 1919...");
});
