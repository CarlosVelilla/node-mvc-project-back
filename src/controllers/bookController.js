const db = require("../models");

// const multer = require("multer");
// const path = require("path");

//=================================
//             Upload Image
//=================================

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "/src/uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
//   fileFilter: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     if (ext !== ".jpg" || ext !== ".png") {
//       return cb(res.status(400).end("only jpg, png are allowed"), false);
//     }
//     cb(null, true);
//   },
// });

// var upload = multer({ storage: storage }).single("file");

// exports.uploadImage = (req, res, next) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.json({ success: false, err });
//     }
//     return res.json({
//       success: true,
//       image: res.req.file.path,
//       fileName: res.req.file.filename,
//     });
//   });
// };

//=================================
//             Book
//=================================
// Add new book
exports.create = async (req, res, next) => {
  const { title, description, price, in_stock, imageUrl } = req.body;

  try {
    const book = await db.Book.create({
      imageUrl,
      title,
      description,
      price,
      in_stock,
    });
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
