const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "The description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "The price is required"],
      trim: true,
    },
    in_stock: {
      type: Number,
      required: [true, "The number is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

const BookModel = new mongoose.model("Book", BookSchema);

module.exports = BookModel;
