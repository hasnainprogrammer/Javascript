"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// const renderCountry = function (data, className = "") {
//   const html = `  <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row">${data.name.official}</p>
//     <p class="country__row"><span>✈</span>${data.capital}</p>
//     <p class="country__row"><span>👫</span>${Number(
//       data.population / 1000000
//     ).toFixed(1)}</p>
//     </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryDataAndNeighbour = function (country) {
//   // AJAX Request
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     // Response data
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     const neighbour = data.borders;
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       "GET",
//       `
//         https://restcountries.com/v3.1/alpha/${neighbour[0]}`
//     );
//     request2.send();

//     request2.addEventListener("load", function () {
//       // Response data
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryDataAndNeighbour("pakistan");

// CALLBACK HELL --> callbacks inside another callbacks

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

////////////////////////////////////////////////////////////////
//                      PROMISES

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Error ${response.status}! Page not found :(`);
//       }
//       response.json();
//     })
//     .then(([data]) => {
//       renderCountry(data);
//       // country 2
//       const neighbour = data.borders[0];
//       // if (!neighbour) {
//       //   throw new Error(`Neighbour not found :(`);
//       // }
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error: Neighbour not found :(`);
//       }
//       response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => {
//       // console.log(err.message);
//       document.querySelector("h1").textContent = err.message;
//     });
// };

// getCountryData("pajdjjkistan");

////////////////////////////////////////////////////////////////
// CODING CHALLENGE:-

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/
// const API_kEY = "your api key";

// const renderCountry = function (data, className = "") {
//   const html = `  <article class="country ${className}">
//     <div class="country__data">
//     <h3 class="country__name">${data.country}</h3>
//     <h4 class="country__region">${data.city}</h4>
//     <p class="country__row"><span>✈</span>${data.state}</p>
//     </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = function (lat, lon) {
//   fetch(`https://geocode.xyz/${lat},${lon}?geoit=json&auth=${API_kEY}`)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data);
//     })
//     .catch((err) => console.log(err));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

////////////////////////////////////////////////////////////////
// EVENT LOOP:-
// console.log("Test Start"); // 1
// setTimeout(() => console.log("0 second timer"), 0); // 3
// Promise.resolve("Resolved promise 1").then((res) => console.log(res)); // 2
// console.log("Test End"); // 1

// first the synchronous code will be executed then the promise code will be executed because the promise callback will be in the microtask queue thats why it has a high prioity over the callback queue the settimeout that will be in the callback queue will be executed.

////////////////////////////////////////////////////////////////
// BUILDING A SIMPLE PROMISE:-
// const lotterPromise = new Promise(function (resolve, reject) {
//   console.log("draw happening 🔮");

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("you win 💰");
//     } else {
//       reject("you loss your money 💩");
//     }
//   }, 2000);
// });
// lotterPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then((res) => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then((res) => {
//     console.log("2 second passed");
//     return wait(1);
//   })
//   .then((res) => {
//     console.log("3 second passed");
//     return wait(1);
//   });

// Promise.resolve("Resolved Promise").then((res) => console.log(res));
// Promise.reject("Rejected Promise").catch((err) => console.log(err));

// const promisifying = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => resolve(pos),
//       (err) => reject(err)
//     );
//   });
// };
// promisifying().then((res) => console.log(res));

// const whereAmI = function () {
//   promisifying()
//     .then((pos) => {
//       const { latitude: lat, longitude: lon } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lon}?geoit=json&auth=${API_kEY}`
//       );
//     })
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data);
//     })
//     .catch((err) => console.log(err));
// };
// whereAmI();

////////////////////////////////////////////////////////////////
// CONSUMING PROMISES WITH ASYNC AWAIT:-

// const whereAmI = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) {
//       throw new Error("something went wrong!");
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// whereAmI("Pakistan");

// - ERROR HANDLING WITH TRY CATCH

// try {
//   let x = 20;
//   const y = 10;
//   y = 5;
//   console.log(y);
// } catch (err) {
//   console.log(err);
// }

// - RETURNING VALUES FROM ASYNC FUNCTION

// const whereAmI = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) {
//       throw new Error("something went wrong!");
//     }
//     const data = await res.json();
//     console.log(data);
//     return `you are in ${data[0].capital}, ${data[0].name.common}`;
//   } catch (err) {
//     // console.log(err);
//     throw new Error("Country not found!");
//   }
// };

// const city = whereAmI("Pakistan");
// // city.then((data) => console.log(data)).catch((err) => console.log(err.message));
// // !--> here we are still using the old promises consuming way

// // we cannot use await outside the function we can only use it inside the asynchronous function so to use await and overcome the old promises consumption way we can use IIFE(immidiately invoke function expression)
// (async function () {
//   try {
//     const data = await whereAmI();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// })();

// - RUNNING PROMISES IN PARALLEL
// when your needed to run multiple promises then use the promise.all method.
// the advantage of promise.all method is that all the promises will be executed in parallel.

// PROMISE.ALL([promise1, promise2, ...promisen])

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
//     const data2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
//     const data3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
//     Promise.all([data1, data2, data3]);
//     // console.log(data1, data2, data3);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// get3Countries("Pakistan", "canada", "portugal");
