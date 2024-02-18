"use strict";
/*
// ******** SCOPING ********
function calcAge(birthYear) {
  // FUNCTION SCOPE
  const age = 2023 - birthYear;
  console.log(age);
  console.log(firstName);

  function showAge() {
    let output = `you are ${age} years old and you were born in ${birthYear}, ${firstName}.`;
    console.log(output);

    if (age > 18) {
      // BLOCK SCOPE
      // var is global scope so variable defined inside the block scope with var is accessible outside the block scope.

      // const, let block scope.
      const vote = `${firstName} your age is ${age}, So you can drive...`;
      console.log(vote);
    }
    console.log(vote); // error --> vote is not defind coz vote is block scope
  }
  showAge();
  //   console.log(output); // error --> output is not defind coz output has local scope and only accessible inside the showAge() function.
}

// GLOBAL SCOPE
const firstName = "Hasnain";
calcAge(2002);

// ******** HOISTING AND TEMPORAR DEAD ZONE TDZ ********
// console.log(country); // value = undefined
// console.log(population); // error --> cannot access before initialize
// console.log(capital); // error --> cannot access before initialize

var country = "pakistan";
let population = 200000000;
const capital = "islamabad";

// console.log(addDecl(10, 20)); // valid
// console.log(addExp(10, 20)); // error --> cannot access before initialize
// console.log(addArrow(10, 20)); // error --> cannot access before initialize
console.log(add(10, 20)); // error --> add is not defined

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

let addArrow = (a, b) => a + b;

var add = function (a, b) {
  return a + b; // error => because the value of var add is undefined so when we call add it will look like undefined(10, 20);
};
// SIMPLE USE CASE

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted!");
}

// ******** THIS KEYWORD ********
console.log(this); // point to the global object which is the window object.

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    console.log(this); // with strict mode on the this keyword inside a regular function will be undefined otherwise if the stric mode is off then it will also point to the global object which is the window object.
};

calcAge(2002);

const hasnain = {
    year: 2002,
    calcAge: function () {
        console.log(this); // this will point to the current object which is in this case hasnain object.
        console.log(2023 - this.year);
    },
};
hasnain.calcAge();

let a = () => {
    console.log(3);
};
// ******** REGULAR FUNCTIONS VS ARROW FUNCTIONS ********
const hasnain = {
    firstName: "Hasnain",
    year: 2002,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);
        // ---------------------------------
        
    // const century = function () {
        //   if (this.year > 2000) {
            //     // error --> cannot read the property of undefined year
    //     console.log("You are from the 21 century!");
    //   }
    // };
    // century();
    
    // SOLUTION 1:-
    // self = this;
    // const century = function () {
    //   if (self.year > 2000) {
        //     console.log("You are from the 21 century!");
    //   }
    // };
    // century();
    
    // SOLUTION 2:-
    // arrow function look up for the this keyword in the parent scope so in this case it will be calcAge() function which have the this keyword.
    const century = () => {
        if (this.year > 2000) {
            console.log("You are from the 21 century!");
        }
    };
    century();
},
  greet: () => {
      console.log(this); // Arrow function do not have the this keyword. it always look  for it in its parent scope.
    console.log(`Hey, ${this.firstName}`);
},
};

hasnain.calcAge();

// ****** Arguments Keyword ******
const sumExp = function (a, b) {
    console.log(arguments);
    return a + b;
};

// console.log(sumExp(5, 3));
console.log(sumExp(5, 3, 2, 6)); // valid

// Arrow function also does not support arguments keyword
const sumArrow = (a, b) => {
    //   console.log(arguments); // error --> arguments is not defined
    return a + b;
};

// console.log(sumArrow(10, 5));
console.log(sumArrow(10, 5, 4, 3));

// ******** PRIMITIVE VS REFERENCE TYPE ********
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30
//  NOTES:-
// when age variable is created a piece of memory is allocated to this variable. Three things will be created. identifier, address, value.
// when oldAge variable is created then it will point to the age variable.
// when the age is reassigned to 31 then a new memory address is created and the age is now point to the new memory address while the oldAge will still pointing to the previous age address.

//  -----------------------------------
// !identifier     Address     Value   !
// !---------------------------------- !
// !age            0001         30     !
//  -----------------------------------

const me = {
  firstName: "Hasnain",
  age: 20,
};
const friend = me;
friend.age = 30;
console.log(me);
console.log(friend);

//  NOTES:-
// when an object is created a memory is allocated to the object as same as primitive values but the value of the object will be the address of the heap memory because reference types or objects are created in the heap memory.

//  ----------------------------------------------------
// !identifier     Address    Value                     !
// !--------------------------------------------------- !
// !me             0001      heap_memory_address(00FD)  !
//  ----------------------------------------------------

// HEAP MEMORY
//  -------------------------------------------------
// !   00FD {                                        !
// !           firstName: 'Hasnain',                 !
// !           age: 20                               !
// ! }                                               !
// !                                                 !
//  -------------------------------------------------

const me = {
  firstName: "Hasnain",
  age: 20,
};
const friend = me;
friend.age = 30;
console.log(me);
console.log(friend);
friend = {}; // error --> 'assigment to a constant variable' and this is because a new empty object will be created in the heap memory and the memory address of the heap memory will be changed to the new empty object and we know that constant cannot be changed or reassigned.

// If you really want to copy the object you can use the Object.assign() method it will join two objects and return a new object as a result.
const friend = {
  firstName: "Zubair",
  age: 20,
};
const friend2 = Object.assign({}, friend);
friend2.firstName = "Sohail";
console.log(friend, friend2);

but it also not completely copy the object instead it shallow copy it when you use object inside another object such as array inside object then when you trying to changed the copying object the changes will be also occur in the original object because both point to the same array object in the heap memory.
*/
