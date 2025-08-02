const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

loginBtn.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

signupBtn.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".auth-buttons")) {
    dropdownMenu.style.display = "none";
  }
});
function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "block";
}

function closeSignup() {
  document.getElementById("signupModal").style.display = "none";
}
