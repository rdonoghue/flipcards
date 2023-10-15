var mainPanel = document.getElementById("mainpic");

var homeNav = document.getElementById("bhome");
var aboutNav = document.getElementById("babout");
var academicsNav = document.getElementById("bacademics");
var studentNav = document.getElementById("bstudent");
var campusNav = document.getElementById("bcampus");

var aboutPanel = document.getElementById("bpabout");
var homePanel = document.getElementById("bphome");
var academicsPanel = document.getElementById("bpacademics");
var studentPanel = document.getElementById("bpstudent");
var campusPanel = document.getElementById("bpcampus");

homeNav.addEventListener("click", function () {
  showHome();
});

aboutNav.addEventListener("click", function () {
  showAbout();
});

studentNav.addEventListener("click", function () {
  showStudent();
});

academicsNav.addEventListener("click", function () {
  showAcademics();
});

campusNav.addEventListener("click", function () {
  showCampus();
});

function showHome() {
  aboutPanel.style.visibility = "hidden";
  studentPanel.style.visibility = "hidden";
  academicsPanel.style.visibility = "hidden";
  campusPanel.style.visibility = "hidden";
  homePanel.style.visibility = "visible";
  mainPanel.style.backgroundPositionY = "0";

  mainPanel.style.backgroundImage = "url(/img/campus.png)";
}

function showAbout() {
  aboutPanel.style.visibility = "visible";
  studentPanel.style.visibility = "hidden";
  academicsPanel.style.visibility = "hidden";
  campusPanel.style.visibility = "hidden";
  homePanel.style.visibility = "hidden";
  mainPanel.style.backgroundPositionY = "0";

  mainPanel.style.backgroundImage = "url(/img/stadium.png)";
}

function showStudent() {
  aboutPanel.style.visibility = "hidden";
  studentPanel.style.visibility = "visible";
  academicsPanel.style.visibility = "hidden";
  campusPanel.style.visibility = "hidden";
  homePanel.style.visibility = "hidden";
  mainPanel.style.backgroundImage = "url(/img/studentlife.png)";
  mainPanel.style.backgroundPositionY = "150px";
}

function showAcademics() {
  aboutPanel.style.visibility = "hidden";
  studentPanel.style.visibility = "hidden";
  academicsPanel.style.visibility = "visible";
  campusPanel.style.visibility = "hidden";
  homePanel.style.visibility = "hidden";
  mainPanel.style.backgroundImage = "url(/img/library.png)";
}

function showCampus() {
  aboutPanel.style.visibility = "hidden";
  studentPanel.style.visibility = "hidden";
  academicsPanel.style.visibility = "hidden";
  campusPanel.style.visibility = "visible";
  homePanel.style.visibility = "hidden";
  mainPanel.style.backgroundImage = "url(/img/oceanview.png)";
}
