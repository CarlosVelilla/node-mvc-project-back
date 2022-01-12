const express = require("express");
const router = express.Router();

const {
  signUp,
  signIn,
  getUsers,
  getUserDetail,
  deleteUser,
  updateUser,
} = require("../controllers/authController");

//@ API /api/auth/sign-up
router.route("/sign-up").post(signUp);

router.route("/sign-in").post(signIn);

router.route("/user").get(getUsers);

router.route("/user/:userId").get(getUserDetail);

router.route("/user/:userId").delete(deleteUser);

router.route("/user/:userId").patch(updateUser);

module.exports = router;
