let users = [];

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Chào mừng, ${user.username}! Bạn đã đăng nhập thành công.`);
        
        
        window.location.href = "index.html"; 
        
        sessionStorage.setItem('username', user.username);
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    
    if (username && email && password) {
        
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert('Email này đã được sử dụng. Vui lòng chọn email khác.');
        } else {
            const user = {
                username: username,
                email: email,
                password: password
            };
            users.push(user); 
            alert("Đăng ký thành công!");
            showLoginForm(); 
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
