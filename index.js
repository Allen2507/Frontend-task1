const popup = document.querySelector(".popupwrapper");
const popupBtn = document.querySelector(".close");
const openPopupBtn = document.querySelector(".openPopup");

const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");

const signup = document.querySelector(".signup-toggle");
const signin = document.querySelector(".signin-toggle");
const signupmobile = document.querySelector(".signup-toggle-mobile");
const signinmobile = document.querySelector(".signin-toggle-mobile");

popupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

openPopupBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

function toggle() {
  signupForm.classList.toggle("hidden");
  loginForm.classList.toggle("hidden");
}

signup.addEventListener("click", () => {
  toggle();
});

signin.addEventListener("click", () => {
  toggle();
});

signinmobile.addEventListener("click", () => {
  toggle();
});

signupmobile.addEventListener("click", () => {
  toggle();
});
