"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

/**
 * destructuring
 */

// const [x, y, z] = arr;
// console.log(x, y, z); // result: 2 3 4

/**
 * destructuring restaurant categories
 */

// const [first, second] = restaurant.categories; // restaurant["categories"];
// console.log(first, second); // result: Italian

// 1. skipping a position
// const [first, , third] = restaurant.categories; // restaurant["categories"];
// console.log(first, third); // result: Italian Vegetarian

// 2. switching variables
// let [first, second] = restaurant.categories; // restaurant["categories"];
// [first, second] = [second, first];
// console.log(first, second); // result: Pizzeria Italian

// 3. destructuring method return
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main); // result: Garlic Bread Pizza

// 4. nested array
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // result: 2 5 6

// 5. setting default values - when we don't know the array length
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // result: 8 9 undefined

//const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // result: 8 9 1
