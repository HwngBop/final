window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled"); 
    } else {
      header.classList.remove("scrolled"); 
    }
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".line");
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  let scrollTimeout; 

const header = document.querySelector(".header");
const line = document.querySelector(".line");


window.addEventListener("scroll", () => {
  
  if (window.scrollY > 0) {
    header.classList.add("sticky", "scrolled");
    line.classList.add("sticky");
  } else {
    header.classList.remove("sticky", "scrolled");
    line.classList.remove("sticky");
  }

  
  header.classList.remove("hidden");
  line.classList.remove("hidden");

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    if (window.scrollY > 0) {
      header.classList.add("hidden"); 
      line.classList.add("hidden");
    }
  }, 1000);  
});


[header, line].forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("hidden"); 
  });

  element.addEventListener("mouseleave", () => {
   
    if (window.scrollY > 0) {
      element.classList.add("hidden");
    }
  });
});

window.onload = function() {
  const username = localStorage.getItem("username");
  const userInfoDiv = document.getElementById("user-info");

  if (username) {
      
      userInfoDiv.innerHTML = `Xin chào, <strong>${username}</strong> | <a href="#" onclick="logout()">Đăng xuất</a>`;
  } else {
      
      userInfoDiv.innerHTML = `<a href="login.html">Đăng nhập</a> | <a href="register.html">Đăng ký</a>`;
  }
}


function logout() {
  
  localStorage.removeItem("username");

  const userInfoDiv = document.getElementById("user-info");
  if (userInfoDiv) {
    userInfoDiv.innerHTML = `<a href="login.html">\u0110\u0103ng nh\u1eadp</a> | <a href="register.html">\u0110\u0103ng k\u00fd</a>`;
  }

  window.location.href = "index.html";
}
  