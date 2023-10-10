const { check } = require("express-validator");
const {CONSTANT} = require("../config/constant")

exports.userValidators = [
    check("displayName")
      .custom((value) => {
        if (!value) {
          throw new Error(CONSTANT.FIELD.DISPLAYNAME + CONSTANT.MESSAGE.IS_INVALID);
        }
        return true;
    }),
]
