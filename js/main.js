// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Options

const showAmPm = true;

// Show Time

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //Set Am or PM
  const amPM = hour >= 12 ? "PM" : "AM";

  //12Hr format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPM : ""}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Background and greeting

function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url(../img/morning.jpg)";
    greeting.textContent = "Good Morning";
  }
  if (hour >= 12 || hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url(../img/afternoon.jpg)";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage = "url(../img/night.jpg)";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Name
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//RUN
showTime();
setBgGreet();
getName();
getFocus();
