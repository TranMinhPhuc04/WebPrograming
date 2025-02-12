function showTab(tabId) {
  // Ẩn tất cả nội dung tab
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.add("hidden");
  });

  // Hiển thị tab được chọn
  document.getElementById(tabId).classList.remove("hidden");

  // Xóa active khỏi tất cả nút tab
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Thêm active cho nút tab hiện tại
  document
    .querySelector(`[onclick="showTab('${tabId}')"]`)
    .classList.add("active");
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str;
}

function convertToNonDiacritic() {
  let text = document.getElementById("inputText").value;
  let result = removeVietnameseTones(text);
  document.getElementById("outputText").innerText = result;
}

const data = [
  {
    id: 1,
    name: "Trần Mạnh Ba",
    age: 30,
    city: "Thái Nguyên",
  },
  {
    id: 2,
    name: "Lê Ngọc Mai",
    age: 28,
    city: "Đồng Tháp",
  },
  {
    id: 3,
    name: "Cao Thế Mỹ",
    age: 25,
    city: "Tiền Giang",
  },
  {
    id: 4,
    name: "Nguyễn Minh Tuấn",
    age: 35,
    city: "Bình Dương",
  },
  {
    id: 5,
    name: "Trần Quang Hân",
    age: 32,
    city: "Đăk Nông",
  },
  {
    id: 6,
    name: "Vũ Thị Mỹ Lệ",
    age: 27,
    city: "TP Hồ Chí Minh",
  },
  {
    id: 7,
    name: "Nguyễn Xuân Huệ",
    age: 33,
    city: "Long An",
  },
  {
    id: 8,
    name: "Trần Thị Giáo",
    age: 29,
    city: "Vĩnh Long",
  },
  {
    id: 9,
    name: "Bùi Trọng Hải",
    age: 31,
    city: "Bình Định",
  },
  {
    id: 10,
    name: "Dương Thanh Tâm",
    age: 26,
    city: "Bạc Liêu",
  },
];

function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  data.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.age} tuổi - ${user.city}`;
    userList.appendChild(li);
  });
}

function findOldestPerson() {
  if (data.length === 0) return;

  // Tìm tuổi lớn nhất trong danh sách
  let maxAge = Math.max(...data.map((person) => person.age));

  // Lọc ra danh sách người có tuổi lớn nhất (trường hợp có nhiều người trùng tuổi)
  let oldestPeople = data.filter((person) => person.age === maxAge);

  // Hiển thị thông tin lên UI
  const userList = document.getElementById("userList");
  userList.innerHTML = `<h3 class="text-xl font-bold text-gray-800">Người có tuổi lớn nhất:</h3>`;
  oldestPeople.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.name} - ${person.age} tuổi - ${person.city}`;
    userList.appendChild(li);
  });
}

function findPersonById() {
  // Tìm người có id = 4
  let person = data.find((user) => user.id === 4);

  // Lấy phần tử hiển thị danh sách
  const userList = document.getElementById("userList");
  userList.innerHTML = `<h3 class="text-xl font-bold text-gray-800">Thông tin người có ID = 4:</h3>`;

  if (person) {
    const li = document.createElement("li");
    li.textContent = `${person.name} - ${person.age} tuổi - ${person.city}`;
    userList.appendChild(li);
  } else {
    userList.innerHTML += `<p class="text-red-500">Không tìm thấy người có ID = 4.</p>`;
  }
}

function displayUsersFrom3To7() {
  // Lấy danh sách từ người thứ 3 đến người thứ 7 (chỉ số từ 2 đến 6)
  let selectedUsers = data.slice(2, 7);

  // Lấy phần tử hiển thị danh sách
  const userList = document.getElementById("userList");
  userList.innerHTML = `<h3 class="text-xl font-bold text-gray-800">Thông tin từ người thứ 3 đến người thứ 7:</h3>`;

  if (selectedUsers.length > 0) {
    selectedUsers.forEach((person) => {
      const li = document.createElement("li");
      li.textContent = `${person.name} - ${person.age} tuổi - ${person.city}`;
      userList.appendChild(li);
    });
  } else {
    userList.innerHTML += `<p class="text-red-500">Danh sách không đủ người để hiển thị.</p>`;
  }
}

function sortUsersByAgeDesc() {
  // Sắp xếp danh sách theo tuổi giảm dần
  let sortedUsers = [...data].sort((a, b) => b.age - a.age);

  // Hiển thị danh sách sau khi sắp xếp
  const userList = document.getElementById("userList");
  userList.innerHTML = `<h3 class="text-xl font-bold text-gray-800">Danh sách sắp xếp theo tuổi giảm dần:</h3>`;

  sortedUsers.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.name} - ${person.age} tuổi - ${person.city}`;
    userList.appendChild(li);
  });
}

function searchUserByName() {
  // Lấy giá trị nhập vào
  let searchText = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  // Lọc danh sách không phân biệt chữ hoa chữ thường
  let filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(searchText)
  );

  // Hiển thị kết quả tìm kiếm
  const userList = document.getElementById("userList");
  userList.innerHTML = `<h3 class="text-xl font-bold text-gray-800">Kết quả tìm kiếm:</h3>`;

  if (filteredUsers.length > 0) {
    filteredUsers.forEach((person) => {
      const li = document.createElement("li");
      li.textContent = `${person.name} - ${person.age} tuổi - ${person.city}`;
      userList.appendChild(li);
    });
  } else {
    userList.innerHTML += `<p class="text-red-500">Không tìm thấy kết quả phù hợp.</p>`;
  }
}

function addNewUser() {
  let name = document.getElementById("newName").value.trim();
  let age = document.getElementById("newAge").value.trim();
  let city = document.getElementById("newCity").value.trim();
  let errorMsg = document.getElementById("addUserError");

  // Kiểm tra tên: Ít nhất 8 ký tự, không có số hoặc ký tự đặc biệt
  let nameRegex = /^[a-zA-ZÀ-Ỹà-ỹ\s]{8,}$/;
  if (!nameRegex.test(name)) {
    errorMsg.textContent =
      "Tên phải có ít nhất 8 ký tự và không chứa số hoặc ký tự đặc biệt!";
    return;
  }

  // Kiểm tra tuổi: Số nguyên dương
  let parsedAge = parseInt(age, 10);
  if (isNaN(parsedAge) || parsedAge <= 0) {
    errorMsg.textContent = "Tuổi phải là số nguyên dương!";
    return;
  }

  // Kiểm tra địa chỉ: Không được để trống
  if (city === "") {
    errorMsg.textContent = "Địa chỉ không được để trống!";
    return;
  }

  // Xóa thông báo lỗi nếu dữ liệu hợp lệ
  errorMsg.textContent = "";

  // Thêm vào danh sách
  let newUser = {
    id: data.length + 1, // Tạo ID mới dựa trên số lượng hiện tại
    name: name,
    age: parsedAge,
    city: city,
  };

  data.push(newUser);
  displayUsers(); // Hiển thị lại danh sách
}

// Hiển thị danh sách sau khi thêm người mới
function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = `<h3 class="text-xl font-bold text-gray-800">Danh sách người dùng:</h3>`;

  data.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.name} - ${person.age} tuổi - ${person.city}`;
    userList.appendChild(li);
  });
}

function extractFirstNames() {
  // Tạo danh sách chứa chỉ phần "tên"
  let firstNames = data.map((user) => {
    let nameParts = user.name.trim().split(" ");
    return nameParts[nameParts.length - 1]; // Lấy phần tử cuối cùng
  });

  // Hiển thị danh sách lên UI
  const userList = document.getElementById("userList");
  userList.innerHTML = `<h3 class="text-xl font-bold text-gray-800">Danh sách chỉ chứa phần "tên":</h3>`;

  firstNames.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    userList.appendChild(li);
  });
}
