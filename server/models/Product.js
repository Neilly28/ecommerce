const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Electronic", productSchema);
