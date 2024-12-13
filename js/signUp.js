document.getElementById("refrenceSignIn").addEventListener("click", function () {
 window.location.href = "index.html";
  });

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var btnSignUp = document.getElementById("btnSignUp");


nameInput.addEventListener("input",function(){
    nameVaildation();
})
emailInput.addEventListener("input", function () {
  emailVaildation();
});
passwordInput.addEventListener("input", function () {
  passwordVaildation();
});


var dataList = [];

if (localStorage.getItem("list")) {
  dataList = JSON.parse(localStorage.getItem("list"));
}

btnSignUp.addEventListener("click", function () {
  submitInputs();
});

function submitInputs() {
  if (nameVaildation() && emailVaildation() && passwordVaildation()) {
    var cartona = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    
    dataList.push(cartona);

    localStorage.setItem("list", JSON.stringify(dataList));
    clearData();
  }

   
}

function nameVaildation() {
    
  var text = nameInput.value;
  var regex = /^[a-zA-Z][a-zA-Z0-9]{2,19}$/;
  if (regex.test(text)) {
    document.getElementById("nameInputREquiredMsg").classList.add("d-none");
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById("nameInputREquiredMsg").classList.remove("d-none");
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    return false;
  }
}

function emailVaildation() {
  var text = emailInput.value;
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(text)) {
    document.getElementById("emailInputREquiredMsg").classList.add("d-none");
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById("emailInputREquiredMsg").classList.remove("d-none");
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    return false;
  }
}

function passwordVaildation() {
  var text = passwordInput.value;
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (regex.test(text)) {
    document.getElementById("passwordInputREquiredMsg").classList.add("d-none");
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById("passwordInputREquiredMsg").classList.remove("d-none");
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.add("is-invalid");
    return false;
  }
}



function clearData(){
    nameInput.value=null;
    emailInput.value=null;
    passwordInput.value=null;
}