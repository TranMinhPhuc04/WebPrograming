const fs = require("fs");

// Bước 1: Tạo file data.txt và ghi nội dung ban đầu
fs.writeFile("data.txt", "Lập trình web nâng cao\n", (err) => {
  if (err) throw err;
  console.log("Đã tạo file và ghi nội dung ban đầu.");

  // Bước 2: Thêm dòng thứ 2 vào file
  fs.appendFile("data.txt", "Làm quen với NodeJS - Trần Minh Phúc\n", (err) => {
    if (err) throw err;
    console.log("Đã thêm nội dung vào file.");

    // Bước 3: Đọc nội dung file và hiển thị ra terminal
    fs.readFile("data.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("Nội dung file data.txt:");
      console.log(data);
    });
  });
});
