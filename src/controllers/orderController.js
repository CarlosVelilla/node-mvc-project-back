const db = require("../models");

//=================================
//             Order
//=================================

// Create new order
exports.createOrder = async (req, res, next) => {
  const { userId, basket, shippingAddress, payment } = req.body;
  try {
    const order = await db.Order.create({
      userId,
      basket,
      shippingAddress,
      payment,
    });
    res.status(201).json({ success: true, order });
  } catch (error) {
    next(error);
  }
};
