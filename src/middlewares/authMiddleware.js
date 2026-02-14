const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "no token authorization denide" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SCREATE);
      req.user = decode;
      console.log("the decoded user is ", req.user);
      next();
    } catch (err) {
      res.status(500).json({ message: "something went wrong" });
    }
  }
};

module.exports = verifyToken;
