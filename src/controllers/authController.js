const db = require("../models");

// create new user from registration
exports.signUp = async (req, res, next) => {
  // res.send("sign up route");
  const { fullName, email, password } = req.body;

  try {
    const user = await db.User.create({ fullName, email, password });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

// sign-in
exports.signIn = async (req, res, next) => {
  // res.send("signin route");
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ error: "Please provide email and password", success: false });
  }

  try {
    const user = await db.User.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await db.User.find({}, { stats: 0, __v: 0 }).lean().exec();
    res.status(200).json({ success: true, users });
  } catch (error) {
    next(error);
  }
};

// get user details
exports.getUserDetail = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await db.User.find(
      {
        _id: userId,
      },
      {
        password: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    )
      .lean()
      .exec();

    res.status(200).send({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// delete user
exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const result = await db.User.deleteOne({
      _id: userId,
    }).lean();

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "User deleted successfully",
      });
    } else {
      res.status(500).send({
        data: "User not deleted successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

// update user
exports.updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const { fullName } = req.body;

  try {
    const updatedUser = await db.User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          fullName: fullName,
        },
      },
      {
        new: true,
      },
    ).select({
      fullName: 1,
      email: 1,
    });

    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token, user });
};
