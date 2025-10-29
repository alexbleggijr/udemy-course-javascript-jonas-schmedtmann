"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

/**
 * destructuring
 */

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); // result: Classico Italiano {fri: { open: 11, close: 23 } sat: { open: 0, close: 24 } thu: { open: 12, close: 22 }} ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// 1. creating an alias
/* const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; */
// console.log(restaurantName, hours, tags); // result: Classico Italiano {fri: { open: 11, close: 23 } sat: { open: 0, close: 24 } thu: { open: 12, close: 22 }} ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// 2. default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); // result: [] ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// 3. mutating variables
// let a = 1;
// let b = 2;
// const obj = { a: 3, b: 4, c: 5 };
// ({ a, b } = obj);
// console.log(a, b); // result: 3 4

// 3. nested object
/* const {
  fri: { open, close },
} = restaurant.openingHours; */
// console.log(open, close); // result: 11 23

/* const {
  fri: { open: o, close: c },
} = restaurant.openingHours; */
// console.log(o, c); // result: 11 23

// 4. destructuring application
restaurant.orderDelivery({
  time: "22:30",
  address: "Via Del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
// result: Order received! Garlic Bread and Risotto will be delivered to Via Del Sole, 21 at 22:30
