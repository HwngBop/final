let users = [];

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Tìm người dùng trong mảng users
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Chào mừng, ${user.username}! Bạn đã đăng nhập thành công.`);
        
        // Chuyển hướng sang trang chủ (index.html)
        window.location.href = "index.html"; // Chuyển hướng
        // Lưu thông tin người dùng vào sessionStorage (hoặc localStorage nếu cần)
        sessionStorage.setItem('username', user.username);
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Kiểm tra nếu người dùng điền đầy đủ thông tin
    if (username && email && password) {
        // Kiểm tra xem email đã tồn tại chưa
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert('Email này đã được sử dụng. Vui lòng chọn email khác.');
        } else {
            const user = {
                username: username,
                email: email,
                password: password
            };
            users.push(user); // Thêm vào mảng users
            alert("Đăng ký thành công!");
            showLoginForm(); // Chuyển về form đăng nhập
        }
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}
