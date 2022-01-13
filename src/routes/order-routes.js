const express = require("express");
const router = express.Router();

const { createOrder } = require("../controllers/orderController");

//@desc POST a certain order to db
//@route POST /api/order
//@access Public
router.route("/").post(createOrder);

module.exports = router;
