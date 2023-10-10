const express = require("express");
const userCtrl = require("../controller/user.controller");
const {userValidators} = require("../middleware/user.middleware");
const router = express.Router();

router.post("/insertData",userValidators,  userCtrl.insertData);
router.post("/fetchData", userCtrl.fetchData);

module.exports = router;