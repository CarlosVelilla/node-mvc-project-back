const express = require("express");
const router = express.Router();

const {
  create,
  getBooks,
  getSingleBook,
} = require("../controllers/bookController");

//@desc POST a certain book to db
//@route POST /api/book
//@access Public
router.route("/").post(create);

//@desc GET all books from db
//@route GET /api/book
//@access Public
router.route("/").get(getBooks);

//@desc GET a book by id from db
//@route GET /api/book/:bookId
//@access Public
router.route("/:bookId").get(getSingleBook);

module.exports = router;
