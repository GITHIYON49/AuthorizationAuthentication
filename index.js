const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/dbConnect");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");

dotenv.config({ quiet: true });
dbConnect();
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.BACKEND_URL || 4000;
// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// });
// console.log(require("crypto").randomBytes(256).toString('hex'))

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
