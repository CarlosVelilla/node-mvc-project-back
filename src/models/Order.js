const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    basket: [
      {
        _id: String,
        orderId: String,
        title: String,
        imageUrl: String,
        price: Number,
        quantity: Number,
        type: String,
      },
    ],
    shippingAddress: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address1: {
        type: String,
        required: true,
      },
      address2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      region: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    payment: {
      nameOfCard: {
        type: String,
        required: true,
      },
      cardNumber: {
        type: String,
        required: true,
      },
      expiryDate: {
        type: String,
        required: true,
      },
      cvv: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true },
);

const OrderModel = new mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
