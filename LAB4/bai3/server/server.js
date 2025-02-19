const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

// Middleware xử lý form
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình để server phục vụ file tĩnh từ frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Route hiển thị product.html
app.get("/product.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/product.html"));
});

// Route hiển thị register.html
app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/register.html"));
});

// Xử lý form đăng ký từ register.html
app.post("/submit-form", (req, res) => {
  const { username, email, password } = req.body;

  console.log("Thông tin người dùng nhập:");
  console.log(`Tên: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`Mật khẩu: ${password}`);

  res.send(`
        <h2>Đăng ký thành công!</h2>
        <p>Tên: ${username}</p>
        <p>Email: ${email}</p>
        <a href="/register.html">Quay lại</a>
    `);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../frontend/404.html"));
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});
