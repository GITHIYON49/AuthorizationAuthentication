const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ userName, password: hashPassword, email });

    await newUser.save();
    res
      .status(201)
      .json({ message: `register new user of username:${userName}` });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid credential" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SCREATE, {
      expiresIn: "1d",
    });
    res.status(200).json(token);
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = { register, login };
