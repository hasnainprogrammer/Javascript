"use strict";
/*
// ******** Converting and Checking Numbers ********

// Conversion
console.log(+"34");
console.log(typeof +"34");

// Parsing
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("e23"));
console.log(Number.parseFloat("3.5rem"));
console.log(Number.parseFloat(" 3.5rem "));

// Checking if a value is NaN
console.log(Number.isNaN(3));
console.log(Number.isNaN("3"));
console.log(Number.isNaN(+"26X"));
console.log(Number.isNaN(20 / 0));

// Checking if a value is a number
console.log(Number.isFinite(3));
console.log(Number.isFinite("3"));
console.log(Number.isFinite(+"26X"));
console.log(Number.isFinite(3 / 0));

console.log(Number.isInteger(3));
console.log(Number.isInteger(3.4));

// ******** Math and Rounding ********

console.log(Math.sqrt(4));
console.log(Math.max(34, 66, 3, 4));
console.log(Math.min(34, 66, 3, 4));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.trunc(Math.random() * 6));

console.log(Math.round(3.8));
console.log(Math.round(3.3));

console.log(Math.ceil(3.8));
console.log(Math.ceil(3.3));

console.log(Math.floor(3.8));
console.log(Math.floor(3.3));

console.log(Math.trunc(-3.8));
console.log(Math.floor(-3.8));

console.log((34.5).toFixed(3));
console.log((34.5).toFixed(2));
console.log((34.5).toFixed(1));


// ******** THE REMAINDER OPERATOR ********

console.log(5 % 2);
console.log(4 % 2);

const oddOrEven = function (n) {
    if (n % 2 === 0) return `${n} is an Even number`;
  else if (n % 2 === 1) return `${n} is an Odd number`;
};
console.log(oddOrEven(56));
console.log(oddOrEven(7));

// ******** WORKING WITH BIGINT ********

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 - 1 + 1);
console.log(2 ** 53 - 1 + 2);

console.log(5358958358308507607067069);
console.log(5358958358308507607067069n);

// Operation
console.log(20n + 20n);
console.log(20n * 20n);
// console.log(2  0n * 20); // error
console.log(20n > 10); // true
console.log(20n === 20); // false
console.log(20n == "20"); // true
console.log(10n / 3n); // convert the floating point number to the nearest integer.


// ******** DATES ********

// Creating a date
const now = new Date();
console.log(now);
console.log(new Date("Sun Jan 29 2023"));
console.log(new Date(2023, 0, 29, 10, 10, 34));

// Working with date
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(future.getTime()));


// ******** INTERNATIONALIZING DATES ********

const usTime = new Intl.DateTimeFormat("en-US").format(new Date());
const arTime = new Intl.DateTimeFormat("ar-SY").format(new Date());
console.log(usTime, arTime);

// Customizing Options

const options = {
  weekday: "long",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const ukTime = new Intl.DateTimeFormat("en-US", options).format(new Date());
console.log(ukTime);

// Getting the language code of the user
console.log(navigator.language);


// ******** INTERNATIONALIZING NUMBERS ********

console.log(new Intl.NumberFormat("en-US").format(343875.34));
console.log(new Intl.NumberFormat("ar-SY").format(343875.34));

const options = {
  style: "unit",
  unit: "kilometer-per-hour",
};
console.log(new Intl.NumberFormat("en-US", options).format(120));

const options2 = {
  style: "currency",
  currency: "USD",
};
console.log(new Intl.NumberFormat("en-US", options2).format(120));

// ******** SETTIMEOUT AND SETINTERVAL ********

// SETTIMEOUT
// ----------
setTimeout(() => console.log("here is your pizza 🍕"), 3000);

// Passing Arguments
setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  "olives",
  "spanich"
  );
  
// Clear setTimeout
const ingredients = ["olives", "spanich"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
  );
  
  if (ingredients.includes("spanich")) clearTimeout(pizzaTimer);
  
  // SETINTERVAL
  // -----------
  
  setInterval(function () {
    const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
console.log(`${hour}: ${minute}: ${second}`);
}, 1000);

*/
