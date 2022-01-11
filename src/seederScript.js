require("dotenv").config();

const booksData = require("./db/books.js");
const connectDb = require("./db/connect");
const db = require("./models");

connectDb();

const importData = async () => {
  try {
    await db.Book.deleteMany({});
    await db.Book.insertMany({ booksData });
    console.log("Data import success");
    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
