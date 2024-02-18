"use strict";
// ****** SELECTING, CREATING AND DELETING ELEMENTS ******

/*
// Selecting Elements:
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
document.getElementsByClassName("btn");

// Creating Elements:
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "we use cookies to improve functionality and analytics. <button class='btn btn--close--cookie'>Got it!</button>";

// header.prepend(message); // insert element before the first child.
header.append(message); // insert element after the last chile.
// header.before(message); // insert element before the element.
// header.after(message); // insert element after the element.

// Deleting Elements:
document.querySelector(".btn--close--cookie").addEventListener("click", () => {
    message.remove(); // New way of deleting an element.
    //   message.parentElement.removeChild(message); // Old way of deleting an element.
});

// ****** STYLES, ATTRIBUTES AND CLASSES ******

// Styling:
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.backgroundColor);
console.log(message.style.width);

// cannot read the attribute of an external css.
console.log(message.style.color);
// Solution
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty("--color-primary", "orange");

// Attributes:
const logo = document.querySelector(".nav__logo");
console.log(logo);
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);
logo.alt = "Beautiful Bankist Logo";
logo.setAttribute("company", "Bankist");
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));

// Data Attribute;
console.log(logo.dataset.versionNumber);

// Classes:
message.classList.add("c", "j");
message.classList.remove("c");
message.classList.toggle("c");
message.classList.contains("c");


// ****** TYPES OF EVENTS AND EVENT HANDLERS ******

const h1 = document.querySelector("h1");

// OLD WAY
h1.onmouseenter = function () {
  alert("onmouseenter: the mouse is on the h1");
};
// MODERN WAY
const alertH1 = function () {
  alert("addeventlistener: the mouse is on the h1");

  // Remove event listener
  // h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);


// ****** EVENT PROPAGATION BUBBLING AND CAPTURING ******

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", function () {
  console.log("Parent");
});

child.addEventListener("click", function (e) {
  console.log("Child");
  // e.stopPropagation();
});


// ****** DOM TRAVERSING ******

const h1 = document.querySelector("h1");

// // Going downwords: child
console.log(h1.querySelector(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.backgroundColor = "yellow";
h1.lastElementChild.style.backgroundColor = "red";

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest(".header"));
h1.closest(".header").style.backgroundColor = "purple";

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

*/
