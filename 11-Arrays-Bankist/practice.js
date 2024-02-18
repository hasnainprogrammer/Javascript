/*
// ****** SIMPLE ARRAY METHODS  *****
// ----------------------------------

// SLICE
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2)); // return new array
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // copy of the origional array
// SPLICE
arr.splice(2); // mutate origional array
arr.splice(1, 2); // delete  the element at index 1 and 2.
console.log(arr);
// REVERSE
arr = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
// CONCAT
let letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(" - "));

// ****** LOOPING ARRAYS FOREACH  *****
// ------------------------------------
// break and continue cannot be used in forEach.

// Loop Through Arrays:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: ${mov} money deposited.`);
  } else {
    console.log(`Movement ${i + 1}: ${Math.abs(mov)} money withdrawn.`);
  }
});

// Loop Through Maps:
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Loop Through Sets:
const currenciesUnique = new Set(["USD", "EURO", "EURO"]);
// set does not have keys or index.
currenciesUnique.forEach(function (value, _, set) {
    console.log(set);
    console.log(`${value}: ${value}`);
});

*/
// ****** CODING CHALLENGE  *****
// -------------------------------
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogsArr = dogsJuliaCorrected.concat(dogsKate);
  dogsArr.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// ****** THE MAP METHOD  *****
// -----------------------------

// return new array containing all the elements by performing an operation on all the elements.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const EUToUSD = 1.1;
const movementsUSD = movements.map(function (mov, i) {
  return mov * EUToUSD;
});
console.log(movementsUSD);

// Arrow function
const movementsUSDArr = movements.map((mov) => mov * EUToUSD);
console.log(movementsUSDArr);

// Example
const movementsDescription = movements.map(function (mov, i) {
  if (mov > 0) {
    return `Movement ${i + 1}: ${mov} money deposited.`;
  } else {
    return `Movement ${i + 1}: ${Math.abs(mov)} money withdrawn.`;
  }
});
// Arrow function
const movementsDescriptionArr = movements.map(
  (mov, i) =>
  `Movement ${i + 1}: ${Math.abs(mov)} money ${
    mov > 0 ? "deposited" : "withdrawn"
  }`
);
console.log(movementsDescriptionArr);


// ****** THE FILTER METHOD  *****
// -----------------------------

// return new array containing all the elements that passes the specified condition.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
// Arrow function
const withdrawals = movements.filter((mov) => mov < 0);

// ****** THE REDUCE METHOD  *****
// -----------------------------

// return new array boiles down all the elements of the array into a single value.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(balance);

const balance2 = movements.reduce((acc, mov) => acc + mov);
console.log(balance2);

// FIND MAXIMUM VALUE IN ARRAY
const maximum = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movements[0]);

console.log(maximum);

*/

// ****** CODING CHALLENGE  *****
// ------------------------------

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages) {
  // 1.
  const humanAges = ages.map(function (dog) {
    if (dog <= 2) {
      return 2 * dog;
    } else if (dog > 2) {
      return 16 + dog * 4;
    }
  });

  // 2.
  const adultsDog = humanAges.filter((dog) => dog >= 18);
  // 3.
  const average = adultsDog.reduce(function (acc, dog) {
    return acc + dog;
  }, 0);
  return average / adultsDog.length;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// ****** CHAINING METHODS  *****
// ------------------------------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const EUToUSD = 1.1;
const total = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * EUToUSD)
  .reduce((acc, mov) => acc + mov, 0);
  
  console.log(total);
  
*/
// ****** CHAINING METHODS  *****
// ------------------------------
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = (ages) => {
  const humanAgesAvg = ages
    .map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter((dog) => dog >= 18)
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
  console.log(humanAgesAvg);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// ****** THE FIND METHOD  *****
// ------------------------------
// does not return an array instead return the first element that satisfies the specified condition.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);


// ****** THE SOME AND EVERY METHOD  *****
// ---------------------------------------
// SOME --> return true if any of the array elements satisfied the specified condition.
// EVERY --> return true if all of the array elements satisfied the specified condition.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));


// ****** THE FLAT AND FLATMAP METHOD  *****
// -----------------------------------------
// Flat --> used to expand the nested array.
// FlatMap --> used when map method is used with flat method means it is a short way of writing map + flat method.

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const arr2 = [
  [1, [2, 3]],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr2);
console.log(arr2.flat(2));

const account5 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account6 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const allAccounts = [account5, account6];

const allMovements = allAccounts
.map((mov) => mov.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(allMovements);

const allMovements2 = allAccounts
.flatMap((mov) => mov.movements)
.reduce((acc, mov) => acc + mov, 0);
console.log(allMovements2);


// ****** ARRAY SORTING METHOD  *****
// -----------------------------------
// return > 0 ----> A,B
// return < 0 ----> B, A
const names = ["ali", "zubair", "sohail", "samir"];
console.log(names.sort()); // mutate the origional array
console.log(names);
const nums = [34, -23, 65, -35, -12, 98, 77];
// Ascending
// nums.sort((a, b) => {
  //   if (a > b) {
//     return 1;
//   } else if (b > a) {
  //     return -1;
  //   }
  // });

// Descending
// nums.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
  //     return 1;
  //   }
  // });
  // console.log(nums);
  
  nums.sort((a, b) => a - b);
  
  
// ****** MORE WAYS OF CREATING AND FILLING ARRAYS  *****
// ------------------------------------------------------
const a1 = [1, 2, 3, 4, 5];
const a2 = new Array(1, 2, 3, 4, 5);
console.log(a1);
console.log(a2);
const x = new Array(5);
// x.fill(1); // fill(element, startindex, endindex)
x.fill(0, 2, 4);
console.log(x);

const y = Array.from({ length: 5 }, () => 333);
console.log(y);
const z = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(z);

document
.querySelector(".balance__value")
  .addEventListener("click", function () {
    const movementsUI = Array.from(
      document.querySelectorAll(".movements__value"),
      (el) => Number(el.textContent.slice(0, -1))
    );
    console.log(movementsUI);
  });

*/

// ****** CODING CHALLENGE  *****
// ------------------------------

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
// 1.
dogs.forEach((dog) =>
  Math.trunc((dog.recommendedFood = dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eats too much.`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eats too little.`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6.
const foodOk = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(foodOk);

// 7.
const dogsOK = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsOK);

// 8.
const sortedFood = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedFood);
