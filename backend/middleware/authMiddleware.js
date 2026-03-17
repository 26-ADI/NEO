const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decoded = jwt.verify(token, 'secretkey');
      req.user = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized" });
    }
  } else {
    res.status(401).json({ message: "No token" });
  }
};

module.exports = protect;