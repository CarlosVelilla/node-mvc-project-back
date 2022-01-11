const express = require("express");
const router = express.Router();

const {
  create,
  getBooks,
  getSingleBook,
} = require("../controllers/bookController");

router.route("/").post(create);

router.route("/").get(getBooks);

router.route("/:bookId").get(getSingleBook);

module.exports = router;
