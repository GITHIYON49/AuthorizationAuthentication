const express = require("express");
const router = express.Router();
const { getUserInfo } = require("../controllers/userController");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/me", verifyToken, getUserInfo);

module.exports = router;
