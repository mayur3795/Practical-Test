const express = require("express");
const apiRouter = express.Router();


//Import Routing Files
let User = require("../routes/user.route.js");
// set routes with server
apiRouter.use("/user", User);

module.exports = apiRouter;