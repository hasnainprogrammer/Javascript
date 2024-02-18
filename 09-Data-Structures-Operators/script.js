"use strict";
/*
// ****** DESTRUCTURING ARRAYS ******

let arr = [1, 2, 3];
console.log(arr);
let [x, y] = arr;
let [i, , j] = arr;
console.log(x, y);
console.log(i, j);

// Switching two numbers
let arr = [10, 20];
console.log(arr);
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
console.log(arr[0], arr[1]);

let [first, second] = arr;
[first, second] = [second, first];
console.log(first, second);

// NESTING DESTRUCTURING 
let arr = [1, 2, [5, 6]];
let [i, , [j, k]] = arr;
console.log(i, j, k);

// Destructing the values return by the function.
const restaurant = {
    starterMenu: ["Rice", "Chicken", "Meat"],
    mainMenu: ["Pizza", "Burger", "Sandwitch"],
    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
};

let [meat, pizza] = restaurant.order(2, 0);
console.log(meat, pizza);

// Setting default values
let arr = [1, 2];
let [x, y = 0, z = 0] = arr;
console.log(x, y, z);
// -----------------------------------------------------------------------
// ****** DESTRUCTURING Objects ******

const restaurant = {
  restaurantName: "Foodeez",
  starterMenu: ["Rice", "Chicken", "Meat"],
  mainMenu: ["Pizza", "Burger", "Sandwitch"],
};

const { restaurantName, starterMenu, mainMenu } = restaurant;

Giving a name of your choice to the destructuring objects variables.
const { restaurantName: restName, starterMenu: starter } = restaurant;
console.log(restName, starter);

// Setting default values.
const { menu = [], mainMenu: availableItems = [] } = restaurant;
console.log(menu, availableItems);

// Mutating variables.
let a = 20;
let b = 10;
const obj = { a: 50, b: 100 };
{ a, b } = obj; //  it will give an error because javascript expect a code block here.
({ a, b } = obj); //  to solve this ☝ problem wrap it with parenthers.
console.log(a, b);


// Nested objects destructuring
const restaurant = {
  restaurantName: "Foodeez",
  starterMenu: ["Rice", "Chicken", "Meat"],
  mainMenu: ["Pizza", "Burger", "Sandwitch"],
  openingHours: {
    fri: {
      opening: 0,
      close: 10,
    },
    sat: {
      opening: 0,
      close: 12,
    },
    sun: {
      opening: 12,
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    return `order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${address} at ${time}`;
  },
};

const {
  fri: { opening, close },
  sun: { opening: o, close: c },
} = restaurant.openingHours;

console.log(opening, close);
console.log(o, c);
console.log(
  restaurant.orderDelivery({
    time: "12:00",
    address: "Islamabad street 7",
    starterIndex: 2,
    mainIndex: 1,
  })
  );
  
  // -----------------------------------------------------------------------
  // ****** THE SPREAD OPERATOR(...) ******

  // used to extract the elements from an iterable such as arrays, strings etc.
  //    "SPREAD"                       VS           "DESTRUCTURING"
  // does not create a variable.                  it create a variable.
  
  const fruits = ["apple", "mango", "orange", "pineapple", "strawberry"];
  console.log(fruits[0], fruits[1], fruits[2], fruits[3], fruits[4]); // normally
  console.log(...fruits); // with spread operator
  // add elements as well as copy the elements of an existing array.
  const newFruits = ["apricot", ...fruits, "Guava"];
  console.log(newFruits);
  
  const str = "hello";
  console.log(...str);
  console.log([...str]);
  // copy array into another array
  const friends = ["zubair", "sohail", "farooq"];
  const friendsCopy = [...friends];
  console.log(friendsCopy);
  // Join two arrays.
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const newArr = [...arr1, ...arr2];
  console.log(newArr);
  
  // using spread operator in a function/
  const pizza = function (ing1, ing2, ing3) {
    return `your pizza with ${ing1}, ${ing2} and ${ing3} is ready 🍕!`;
  };
  
const ingredients = ["cheese", "bread", "floor"];
console.log(pizza(ingredients[0], ingredients[1], ingredients[2])); // normally
console.log(pizza(...ingredients)); // with spread operator

// In ES2018 spread operator can also be used with objects.
const phone = {
  brand: "iphone",
  price: 200000,
};
const newPhone = { name: "iphone 11 promax", ...phone, release: 2020 };
console.log(newPhone);
// Copy object to another object.
const phoneCopy = { ...phone };
phoneCopy.brand = "Android";
console.log(phoneCopy);

// -----------------------------------------------------------------------
// ****** THE REST PATTERN AND PARAMETERS(...) ******

//     REST                         VS                SPREAD
// convert string into                     convert comma separated values into
// comma separated values.                 individual elements.
// Left side of = operator.                 Right side of = operator.
// E:g:- string to arrays.                 E:g:- convert array into strings.
// ARRAYS
const arr = [1, 2, 3];
const [a, ...others] = arr;
console.log(a, others);
const mainMenu = ["pizza", "burger", "sandwitch"];
const startMenu = ["Rice", "Chicken", "Meat"];
// we can use both spread and rest operator at the same time.
const [mainFood, ...othersFood] = [...mainMenu, ...startMenu];
console.log(mainFood, othersFood);

// OBJECTS
const openingHours = {
  fri: {
    open: "7:00",
    close: "12:00",
  },
  sat: {
    open: "12:00",
    close: "18:00",
  },
  sun: {
    open: "3:00",
    close: "10:00",
  },
};

const { fri, ...others } = openingHours;
console.log(fri, others);

// FUNCTIONS
const add = function (...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
};

add(2, 4);
add(4, 7, 9, 12, 23);
add(4, 7, 9, 12, 23, 34, 56, 66);


// -----------------------------------------------------------------------
// ****** SHORT CIRCUITING ******

// OR --> if the first operand is true the entire result will be true and the comparison will be stopped without evaluating the remaining operands.
console.log(23 || "hello"); // output:- 23
console.log(null || "hello"); // output:- hello
console.log(23 || "hello" || undefined || 20); // output:- 23
console.log(null || undefined); // output:- undefined
// AND --> if the first operand is false the entire result will be false and the comparison will be stopped without evaluating the remaining operands.
console.log(23 && "hello"); // output:- hello
console.log(null && "hello"); // output:- null
console.log(23 && "hello" && undefined && 20); // output:- undefined

// ****** NULLISH COALESCING OPERATOR(??) ******
const numGuests = 0;
// check if numGuest exist if exist return numGuests otherwise 10.
const guests = numGuests ? numGuests : 10;
// numGuests exist but instead it return 10 because the value of numGuests is 0 and 0 is falsy value.
console.log(guests);

//  SOLUTION
const numGuests = 0;
const guests = numGuests ?? 10; // only null and undefined values are nullish values in Nullish Coalescing operator. (NOT 0, '' are not falsy values in ??)
console.log(guests);
*/

// -----------------------------------------------------------------------
// ****** CODING CHALLENGE ******

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
const [players1, players2] = game.players;
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
// 5.
// SIMPLE
// const { team1, draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// NESTED
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goal were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);
// 7.
team1 < team2 && console.log("Team 1 is likely to win!");
team2 < team1 && console.log("Team 2 is likely to win!");

// -----------------------------------------------------------------------
// ****** FOR OF LOOP ******

const menus = ["pizza", "burger", "sandwitch"];
// Loop through an array
for (const item of menus) console.log(item);
// Finding index
for (const item of menus.entries()) {
  console.log(item);
}
// using destructuring with for of loop
for (const [i, el] of menus.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// -----------------------------------------------------------------------
// ****** ENHANCED OBJECT LITERALS ******

const restaurantInfo = {
  restaurantName: "Foodeez",
  founder: "John Doe",
  fondAt: 1990,
};

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  // restaurantInfo: restaurantInfo,
  
  // Enhancement 1 in ES6
  // we can do this ☝ like this:
  restaurantInfo,
  [weekdays[4]]: {
    open: "12:00",
    close: "24:00",
  },
  [weekdays[5]]: {
    open: "7:00",
    close: "15:00",
  },
  // Enhancement 3 in ES6
  // you can derive the value of a property
  [weekdays[0 + 6]]: {
    open: "1:00",
    close: "10:00",
  },
  
  // Enhancement 2 in ES6
  // we can write methods like this:
  restaurant() {
    console.log(
      `Name: ${this.restaurantInfo.restaurantName}\nFounder: ${this.restaurantInfo.founder}\nFound at ${this.restaurantInfo.fondAt}`
    );
  },
};

console.log(openingHours);
openingHours.restaurant();


// -----------------------------------------------------------------------
// ****** OPTIONAL CHAINING(?.) ******

// Objects
const user = {
  name: "john",
  email: "john@gmail.com",
  info() {
    console.log(`${this.name}  ${this.email}`);
  },
};
// console.log(user.age); // error --> property does not exist.
// Normally
if (user.age) {
  console.log(user.age.dob);
} else {
  console.log("Does not exist");
}
// With optional chaining
console.log(user?.age ?? "does not exist...");
// Array
const users = [{ name: "ali", email: "ali@gmail.com" }];
console.log(users[0]?.name ?? "Array is empty");
// Method
console.log(user?.info ?? "METHOD DOES NOT EXIST");


// -----------------------------------------------------------------------
// ****** LOOP THROUGH OBJECTS ******

const openingHours = {
  fri: {
    open: "7:00",
    close: "12:00",
  },
  sat: {
    open: "12:00",
    close: "18:00",
  },
  sun: {
    open: "3:00",
    close: "10:00",
  },
};

console.log(Object.keys(openingHours)); // return an array of keys of an object.
console.log(Object.values(openingHours)); // return an array of values of an object.
console.log(Object.entries(openingHours)); // return an array consist of keys and values.
for (const key of Object.keys(openingHours)) {
  console.log(key);
}
for (const value of Object.values(openingHours)) {
  console.log(value);
}
for (const [key, value] of Object.entries(openingHours)) {
  console.log(key, value);
}
// Example:
for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

// -----------------------------------------------------------------------
// ****** CODING CHALLENGE ******

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
      
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
console.log(`Average is ${average / odds.length}`);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const output =
    team === "x"
      ? ` Odd of draw: ${odd}`
      : ` Odd of victory ${game[team]}: ${odd}`;
  console.log(output);
}

// 4. BONUS
const [, p1, p2, p3] = game.scored;
const scorers = {
  [p1]: 1,
  [p2]: 2,
  [p3]: 1,
};

console.log(scorers);

// -----------------------------------------------------------------------
// ****** SETS ******

const items = new Set(["pizza", "pasta", "pizza", "burger", "pizza"]);
console.log(items);
console.log(items.size);
items.add("sandwitch");
items.add("sandwitch");
items.add("Rossoto"); // add an element.
items.delete("Rossoto"); // delete an element.
// items.clear(); // empty the set.
console.log(items);
console.log(items.has("pizza")); // check wheather an element exist or not in the set.
// Loop through a set
for (const item of items) {
  console.log(item);
}
// Example
const staff = ["waiter", "chef", "waiter", "manager", "waiter"];
const staffUnique = new Set(staff);
const staffUniqueArr = [...new Set(staff)];
console.log(staffUnique.size);
console.log(staffUniqueArr);

// -----------------------------------------------------------------------
// ****** MAPS ******

const rest = new Map(); //--> difference from object is that the keys can be of any type.
// add element to the map.
rest.set("name", "Foodeez");
rest.set(1, "Pakistan");
rest.set(2, "Turkey");
rest.set(true, "we open at 10 :D");
rest.set(false, "we close at 20 :(");
console.log(rest);
// getting element from the map.
console.log(rest.get("name"));
console.log(rest.get(1));
console.log(rest.get(2));
console.log(rest.get(true));
console.log(rest.get(false));
// check wheather a key is present or not
console.log(rest.has("name"));
console.log(rest.has(1));
console.log(rest.has("1")); // false --> Because type matter,e.g:- 1 !== '1'.
console.log(rest.size);
console.log(rest.delete("name"));
console.log(rest.clear());
console.log(rest);
// keys can also be an object such as an array

// rest.set([1, 2], "Test");
// console.log(rest.get([1, 2])); /// not valid you cannot access it just like that.
// SOLUTION:-
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr)); // valid

// NEW WAY TO WRITE A MAP
const questions = new Map([
  ["question", "Which is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct answer 🎉"],
  [false, "Try again"],
]);
console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") {
    console.log(`${key}: ${value}`);
  }
}
// const answer = Number(prompt("What is your answer?"));
const answer = 3;
console.log(questions.get(questions.get("correct") === answer));
console.log(questions.keys());
console.log(questions.values());
console.log(questions.entries());
// convert map into array
console.log([...questions]);

*/
// -----------------------------------------------------------------------
// ****** CODING CHALLENGE ******

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
let events = new Set();
for (const value of gameEvents.values()) {
  events.add(value);
}
console.log([...events]);

// alternative / efficient
const e = [...new Set(gameEvents.values())];
console.log(e);
// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
  );
  
  // 4.
  for (const [key, value] of gameEvents) {
    const result =
    key <= 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`;
  console.log(result);
}

// -----------------------------------------------------------------------
// ****** WORKING WITH STRINGS ******

const airplane = "PIA Pakistan";
const plane = "A03";
console.log(airplane);
console.log(airplane.length);
console.log(airplane.indexOf("a"));
console.log(airplane.lastIndexOf("a"));
console.log(airplane.slice(4));
console.log(airplane.slice(0, 3));
console.log(airplane.slice(airplane.indexOf(" ") + 1));
console.log(airplane.slice(0, -8));
console.log(airplane.slice(-1));

// Example
const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("you got the middle seat");
  } else console.log("you got lucky");
};
checkMiddleSeat("A0B");
checkMiddleSeat("A0C");
checkMiddleSeat("A0E");
*/
/*
NOTES:
 when we call a method on a string javaScript behind the scene create an object of the string containing the same string and this process is called boxing.
 e.g:- const str = 'hello';
 str.slice(0, 2);
 const str = new String('hello');
 but the return string is always primitive means string.
*/
/*
// CASING:-
const firstName = "joHn DoE";
console.log(firstName);
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

const checkEmail = function (email, loginEmail) {
  // loginEmail = loginEmail.toLowerCase();
  // loginEmail = loginEmail.trim(); // remove spaces or new lines
  // alternative
  loginEmail = loginEmail.toLowerCase().trim();
  if (email === loginEmail) {
    console.log("Login Succesfull!");
  } else {
    console.log("Login Failed!");
  }
};
checkEmail("john@gmail.com", "    John@Gmail.Com \n");

// REPLACE:-
const moneyPkr = "60,000RS";
const moneyUs = moneyPkr.replace(",", ".").replace("RS", "$");
console.log(moneyPkr);
console.log(moneyUs);

const str = "All passengers come to boarding door, boarding door...";
const correctStr = str.replace("door", "gate"); // replace only the first occurance
const replaceAll = str.replaceAll("door", "gate");
console.log(str);
console.log(correctStr);
console.log(replaceAll);

// BOOLEANS:-
const plane = "Fly Emirates";
console.log(plane.includes("F")); // true
console.log(plane.includes("Fly")); // true
console.log(plane.includes("Sky")); // false
console.log(plane.startsWith("F")); // true
console.log(plane.startsWith("Fly")); // true
console.log(plane.endsWith("s")); // true
console.log(plane.endsWith("Emirates")); // true
console.log(plane.endsWith("emirates")); // false

// Example
const checkBaggage = function (item) {
  item = item.toLowerCase();
  if (item.includes("knife") || item.includes("gun")) {
    console.log("you are not allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// SPLIT AND JOIN:-
console.log("hasnain khan".split(" "));
console.log(["Mr.", "Hasnain", "khan"].join(" "));

// Example ---> write a function to capitalize the first letter of each word.
const capitalizeName = function (name) {
  // 1. separate each word of the name.
  const names = name.split(" ");
  const namesUpper = [];
  // 2. convert every first character of each word to upper case.
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
  // 3. join the capitalize letter with the remaining name.
};
capitalizeName("jonas schmedmann");
capitalizeName("john doe");
capitalizeName("mahendra singh dhoni");

// PADDING:-
const message = "come to gate no 7!";
console.log(message.length);
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "+"));
console.log(
  "Welcome to the world of javascript".padStart(40, "-").padEnd(46, "-")
  );
  
  // Example
  const creditCard = function (number) {
    number = String(number);
  return number.slice(-4).padStart(number.length, "*");
};

console.log(creditCard("4434774"));
console.log(creditCard(3483926262366363636));
console.log(creditCard(62336464736));
// REPEAT:-
const message2 = "Flight delay due to bad weather!\n";
console.log(message2.repeat(5));

// Example
const flightsInLine = function (n) {
  console.log(`${n} flights are in line ${"✈".repeat(n)}`);
};

flightsInLine(4);
flightsInLine(2);

*/

// -----------------------------------------------------------------------
// ****** CODING CHALLENGE ******

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const text = document.querySelector("textarea");
let output = "";
const camelCase = function (variables) {
  variables = variables.toLowerCase();
  const words = variables.split("\n");
  for (let [i, word] of words.entries()) {
    word = word.split("_");
    output = word[0] + word[1][0].toUpperCase() + word[1].slice(1);
    console.log(`${output.padEnd(output.length + i + 1, "✅".repeat(i + 1))}`);
  }
};

document.querySelector("button").addEventListener("click", function () {
  camelCase(text.value);
});
*/
