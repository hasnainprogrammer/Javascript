/*
const min = function (arr) {
  //   let min = 0; // creating a bug because min is 0 and the list min value is 1.
  let min = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
};

console.log(min([13, 3, 656, 2, 32, 33, 45]));

// CODING CHALLENGE:-

--- MY SOLUTION ---
*/

const printForcast = function (arr) {
  let outputStr = "";
  let day = 1;
  for (let i = 0; i < arr.length; i++) {
    let tempInfo = `... ${arr[i]}C in ${day} days`;
    outputStr += tempInfo;
    day += 1;
  }
  console.log(outputStr);
};

printForcast([17, 21, 23]);
// printForcast([12, 5, -5, 0, 4]);
