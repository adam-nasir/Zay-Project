const navBar = document.querySelector(".nav-link");
const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const exitButton = document.querySelector(".exit-button");
const overlay = document.querySelector(".overlay");
const accordButton = document.querySelectorAll(".accord-btn");
const footerBlock = document.querySelectorAll(".footer-block");
// callback functions

function clickHamburger() {
  overlay.classList.toggle("no-display");
  body.classList.toggle("no-scroll");
  navBar.classList.toggle("appear");
}

function clickExitButton() {
  overlay.classList.toggle("no-display");
  body.classList.toggle("no-scroll");
  navBar.classList.toggle("appear");
}

function clickAccordButton(e) {
  if (e.target === accordButton[0]) {
    footerBlock[0].classList.toggle("display");
  } else if (e.target === accordButton[1]) {
    footerBlock[1].classList.toggle("display");
  } else if (e.target === accordButton[2]) {
    footerBlock[2].classList.toggle("display");
  }
}

//AddEventListener

//Hamburger Menu
hamburger.addEventListener("click", clickHamburger);
exitButton.addEventListener("click", clickExitButton);

//Accordion Button
for (let accordItem of accordButton) {
  accordItem.addEventListener("click", clickAccordButton);
}
