require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully..!", process.env.MONGO_URI);
  } catch (err) {
    console.log("Fail to connect database..!", err.message);
  }
};

module.exports = connectDB;