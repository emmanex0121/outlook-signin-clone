const nextBtn = document.getElementById("submit-email");
console.log(nextBtn.value);

// nextBtn.addEventListener("click", () => {
//   const email = document.getElementById("email-input");
//   if (email.checkValidity() && email.length > 0) {
//     sessionStorage.setItem("email", email.value);
//     window.location.href = "pass.html";
//   }
// });
function addEmail() {
  console.log("Hehe");
  const email = document.getElementById("email-input");
  if (email.checkValidity() && email.value.length > 0) {
    sessionStorage.setItem("email", email.value);
    window.location.href = "./pass.html";
  }
}
