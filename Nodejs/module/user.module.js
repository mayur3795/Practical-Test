const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    displayName: { type: String, required: true },
    picture: { type: String,default: "" },
    score: { type: Number, default: 0 }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserSchema);
