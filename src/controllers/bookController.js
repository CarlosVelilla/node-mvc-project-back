const db = require("../models");

// Add new book
exports.create = async (req, res, next) => {
  const { title, description, price, in_stock } = req.body;

  try {
    const book = await db.Book.create({ title, description, price, in_stock });
    res.status(201).json({ success: true, book });
  } catch (error) {
    next(error);
  }
};

// get all books
exports.getBooks = async (req, res, next) => {
  try {
    const books = await db.Book.find({}, { stats: 0, __v: 0 }).lean().exec();
    res.status(200).json({ success: true, books });
  } catch (error) {
    next(error);
  }
};

// get a certain book
exports.getSingleBook = async (req, res, next) => {
  try {
    const bookId = req.params["bookId"];

    const book = await db.Book.find({ _id: bookId }).lean().exec();

    res.status(200).send({
      data: book,
    });
  } catch (error) {
    next(error);
  }
};
