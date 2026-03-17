const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// Register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  res.json({
    _id: user._id,
    token: generateToken(user._id)
  });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json({
      _id: user._id,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};