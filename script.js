const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+";

const generate = document.querySelector("button");

const allChars = upperCase + lowerCase + numbers + special;
// generate.addEventListener("click", () => {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const random = Math.floor(Math.random() * 4);
//     if (random == 0) {
//       password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
//     } else if (random == 1) {
//       password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
//     } else if (random == 2) {
//       password += numbers.charAt(Math.floor(Math.random() * numbers.length));
//     } else {
//       password += special.charAt(Math.floor(Math.random() * special.length));
//     }
//   }
//   passwordBox.value = password;
// });

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += special[Math.floor(Math.random() * special.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value === "") {
    alert("Please generate a password first");
    return;
  }
  // document.contentEditable("copy");
  navigator.clipboard.writeText(passwordBox.value);
  document.querySelector(".tooltip").style.opacity = 1;
  setTimeout(() => {
    document.querySelector(".tooltip").style.opacity = 0;
  }, 2000);
}
