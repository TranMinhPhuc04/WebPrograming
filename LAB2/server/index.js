const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// sử dụng middleware
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes API
app.get("/", (req, res) => {
  res.json({ message: "Hello from Server" });
});

// Tạo web server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
