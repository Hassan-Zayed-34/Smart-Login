var nameInsert = document.getElementById("insertName");

var currentIndex = +localStorage.getItem("sucssesIndex");

var btnLogOut = document.getElementById("logOut");

btnLogOut.addEventListener("click", function () {
  localStorage.removeItem("sucssesIndex");
  window.location.href = "index.html";
});

var dataList = [];

if (localStorage.getItem("list")) {
  dataList = JSON.parse(localStorage.getItem("list"));
}

nameInsert.innerHTML = dataList[currentIndex].name;
