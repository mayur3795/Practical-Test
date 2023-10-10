const USER_COLLECTION = require("../module/user.module");
const { validationResult } = require("express-validator");
const { CONSTANT } = require("../config/constant");

/*
Method: POST
Topic: insertData 
*/
exports.insertData = async (req, res) => {
  try {
    const errors = validationResult(req).array();
    console.log({ errors });
    if (errors && errors.length > 0) {
      let messArr = errors.map((a) => a.msg);
      return res.status(400).send({
        message: messArr.join(", "),
      });
    } else {
      let userObj = { ...req.body };
      const user = new USER_COLLECTION({ ...userObj });
      await user.save();
      return res.status(200).send({
        message: CONSTANT.DATA + CONSTANT.MESSAGE.ADDED_SUCCESSFULLY,
      });
    }
  } catch (error) {
    return res.status(400).send({
      message: CONSTANT.MESSAGE.SOMETHING_WRONG,
      error,
    });
  }
};

/*
Method: POST
Topic: fetch data 
*/
exports.fetchData = async (req, res) => {
  const { sortingField } = req.body;

  try {
    const sortField = sortingField || CONSTANT.FIELD.SCORE;
    const UserData = await USER_COLLECTION.find(
      {},
      { displayName: 1, score: 1, picture: 1 }
    ).sort({ [sortField]: -1 });
    if (UserData) {
      return res.status(200).send({
        message: CONSTANT.DATA + CONSTANT.MESSAGE.FOUND_SUCCESSFULLY,
        data: UserData,
      });
    } else {
      return res.status(200).send({
        message: CONSTANT.DATA + CONSTANT.MESSAGE.NOT_FOUND,
        UserData: [],
      });
    }
  } catch (error) {
    return res.status(400).send({
      message: CONSTANT.MESSAGE.SOMETHING_WRONG,
      error,
    });
  }
};
