require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const connectDB = require("../config/db.js");
const app =  express();
const PORT = 8080;

app.set("trust proxy", 1);

mongoose.Promise = global.Promise;
connectDB();

app.use("/public", express.static("public"));

app.use(express.json({ limit: "5mb" }));

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("application health check");
});

//Import main route
const root = require("../routes/index.js")

app.use("/", root);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}.`);
});