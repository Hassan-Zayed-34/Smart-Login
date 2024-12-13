var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var btnLogIn = document.getElementById("btnlogIN");

document
  .getElementById("refrenceSignUp")
  .addEventListener("click", function () {
    window.location.href = "signUp.html";
  });

var dataList = [];

if (localStorage.getItem("list")) {
  dataList = JSON.parse(localStorage.getItem("list"));
}

btnLogIn.addEventListener("click", function () {
  console.log(emailInput.value);
  console.log(passwordInput.value);

  if (!emailInput.value || !passwordInput.value) {
    document.getElementById("allInputsREquiredMsg").classList.remove("d-none");
  } else {
    document.getElementById("allInputsREquiredMsg").classList.add("d-none");
    checkData();
  }
});

function checkData() {
  for (var i = 0; i < dataList.length; i++) {
    if (
      dataList[i].email === emailInput.value &&
      dataList[i].password === passwordInput.value
    ) {
      console.log("login success");
      document.getElementById("logInSuccessMsg").classList.remove("d-none");
      document.getElementById("logInNotSuccessMsg").classList.add("d-none");
      localStorage.setItem("sucssesIndex", i);
      window.location.href = "home.html";
    } else {
      console.log("login failed");
      document.getElementById("logInSuccessMsg").classList.add("d-none");
      document.getElementById("logInNotSuccessMsg").classList.remove("d-none");
    }
  }
}
