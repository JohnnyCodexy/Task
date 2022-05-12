/*Selectors for the progres bar*/
const percentage = document.getElementById("percentage");
const percentage25 = document.getElementById("percentage1");
const percentage50 = document.getElementById("percentage2");
const percentage75 = document.getElementById("percentage3");
const percentageCheckMark = document.getElementById("percentageCheck");

/*Selectors for type input fields*/
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");

/*Selectors for check input fields*/
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");

/*Selectors for numbers and checkmark classes for each input field*/
const number1 = document.getElementById("number1");
const checkmark1 = document.getElementById("checkmarkFname");

const number2 = document.getElementById("number2");
const checkmark2 = document.getElementById("checkmarkLname");

const number3 = document.getElementById("number3");
const checkmark3 = document.getElementById("checkmarkEmail");

const number4 = document.getElementById("number4");
const checkmark4 = document.getElementById("checkmark-chekbox");

/*button selector*/
const button = document.querySelector("button");

let validElements2 = [false, false, false, false];

function fNameChecker() {
  if (fnameInput.value.length !== 0) {
    number1.classList.add("hidden");
    checkmark1.classList.remove("hidden");
    validElements2[0] = true;
  } else if (fnameInput.value.length == 0) {
    number1.classList.remove("hidden");
    checkmark1.classList.add("hidden");
    validElements2[0] = false;
  }
}
function lNameChecker() {
  if (lnameInput.value.length !== 0) {
    number2.classList.add("hidden");
    checkmark2.classList.remove("hidden");
    validElements2[1] = true;
  } else if (lnameInput.value.length == 0) {
    number2.classList.remove("hidden");
    checkmark2.classList.add("hidden");
    validElements2[1] = false;
  }
}

function emailCkecker() {
  if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
    number3.classList.add("hidden");
    checkmark3.classList.remove("hidden");
    validElements2[2] = true;
  } else if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".")
  ) {
    number3.classList.remove("hidden");
    checkmark3.classList.add("hidden");
    validElements2[2] = false;
  }
}
function checkBox() {
  if (checkBox1.checked || checkBox2.checked) {
    number4.classList.add("hidden");
    checkmark4.classList.remove("hidden");
    validElements2[3] = true;
  } else if (!checkBox1.checked && !checkBox2.checked) {
    number4.classList.remove("hidden");
    checkmark4.classList.add("hidden");
    validElements2[3] = false;
  }
}

function percentageHandler() {
  let n = 0;
  for (let i = 0; i < validElements2.length; i++) {
    if (validElements2[i] == true) {
      n++;
    }
  }
  console.log(n);

  switch (n) {
    case 4:
      percentage.classList.add("hidden");
      percentage25.classList.add("hidden");
      percentage50.classList.add("hidden");
      percentage75.classList.add("hidden");
      percentageCheckMark.classList.remove("hidden");
      button.disabled = false;
      break;
    case 3:
      percentage.classList.add("hidden");
      percentage25.classList.add("hidden");
      percentage50.classList.add("hidden");
      percentage75.classList.remove("hidden");
      percentageCheckMark.classList.add("hidden");
      button.disabled = true;

      break;
    case 2:
      percentage.classList.add("hidden");
      percentage25.classList.add("hidden");
      percentage50.classList.remove("hidden");
      percentage75.classList.add("hidden");
      button.disabled = true;

      break;
    case 1:
      percentage.classList.add("hidden");
      percentage25.classList.remove("hidden");
      percentage50.classList.add("hidden");
      percentage75.classList.add("hidden");
      button.disabled = true;
      break;
    case 0:
      percentage.classList.remove("hidden");
      percentage25.classList.add("hidden");
      percentage50.classList.add("hidden");
      percentage75.classList.add("hidden");
      button.disabled = true;
      break;
  }
}

/*progress bar function*/
$(function () {
  $(".chart").easyPieChart({
    size: 34,
    barColor: "#36e617",
    scaleLength: 0,
    lineWidth: 3,
    trackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });
});

document.getElementById("form").addEventListener("input", function (event) {
  fNameChecker();
  lNameChecker();
  emailCkecker();
  checkBox();
  percentageHandler();
});
