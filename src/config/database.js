const mongoose = require("mongoose");
const uri =
  "mongodb+srv://sanjaybhatt0621:R0910pgdkz4vXBt4@nodejscluster.gh8kj2a.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSCluster";

const connectDB = async () => {
  mongoose.connect(uri);
};

module.exports = connectDB;
