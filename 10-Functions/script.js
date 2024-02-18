"use strict";
// ****** FUNCTION PARAMETERS DEFAULT VALUES ******
// -----------------------------------------------

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // can also contain expression
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 380);
createBooking("LH123", undefined, 380);
console.log(bookings);

// ****** HOW PASSING ARGUMENTS WORKS VALUE VS REFERENCE ******
// ------------------------------------------------------------

const flight = "LH234";
const hasnain = {
    name: "Hasnain Khan",
    passport: 5683434582483,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr " + passenger.name;

  if (passenger.passport === 5683434582483) {
    alert("Checked in");
  } else {
      alert("Wrong passport!");
    }
};

// checkIn(flight, hasnain);
// console.log(flight);
// console.log(hasnain);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(hasnain);
checkIn(flight, hasnain);

// VALUE VS REFERENCE --> JavaScript do not have passing by reference it only have passing by value.

// ****** FIRST CLASS FUNCTIONS VS HIGH ORDER FUNCTIONS ******
// -----------------------------------------------------------
// a function is simply a value or a javascript object.
// A function that takes another function as a argument is known as High order function and the function that were passed as a argument is known as callback function.
// E.g:- btn.addEventListener('click', callbackfunction);
//            ^
//            |__ High order function

// Function Accepting Callback Functions:-
// -------------------------------------

const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// console.log(upperFirstWord("Javascript is awesome!"));

const transformer = function (str, fn) {
  console.log(`Origional string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is awesome!", oneWord);
transformer("Javascript is awesome!", upperFirstWord);
// The advantage of this is the level of abstraction.

// Function Returning Another Function:-
// ------------------------------------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("Hasnain");
greet("Hello")("Babar");
// Arrow Function
const greetArrow = (greeting) => (name) => console.log(`${greeting}, ${name}`);
greetArrow("Good Morning")("Hasnain");

// ****** THE CALL AND APPLY METHODS ******
// ----------------------------------------
// allow us to manually set the this keyword.
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} has booked the flight ${this.airline} ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` }, name);
  },
};

lufthansa.book(230, "John");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// Call
const book = lufthansa.book;
book.call(eurowings, 239, "Bob");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 245, "Cooper");
console.log(swiss);

// Apply
const flightData = [299, "Steven"];
book.apply(swiss, flightData);
// Alternative
book.call(swiss, ...flightData);

// ****** THE BIND METHOD ******
// -----------------------------
// it works the same as the call or apply but the difference is that it does not call the method directly instead it return the function.
const swiss2 = book.bind(swiss);
swiss2(399, "Sams");

// you can also preset the value of a parameter
const swiss3 = book.bind(swiss, 555); // preset the value of flightNum.
swiss3("Steve");

// Example
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
  
  // Partial application
  const addTax = function (rate, value) {
    return value + value * rate;
  };
  console.log(addTax(0.1, 300));
  const addVAT = addTax.bind(null, 0.3);
  console.log(addVAT(100));
  */

// ****** CODING CHALLENGE ******
// -----------------------------

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  // 1.
  registerNewAnswer() {
    const userAnswer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    if (typeof userAnswer === "number" && userAnswer < this.options.length) {
      this.answers[userAnswer] += 1;
    }
    //4.
    this.displayResults();
    this.displayResults("string");
  },
  // 3.
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
// 2.
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
// 5.
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


// ****** IMMEDIATLEY INVOKED FUNCTION EXPRESSIONS(IIFE) ******
// ------------------------------------------------------------
// used if you want to call a function only once.

(function () {
  console.log("This will never run again");
})();
// Arrow function
(() => console.log("This will ALSO never run again"))();


// ****** CLOSURES ******
// ----------------------
// a closure make sure that a functions doesn't loose connection to variables that existed at the function's birth place.
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

*/
