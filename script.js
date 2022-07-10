'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open : 12,
    close: 22,
  },
  [weekdays[4]]: {
    open : 11,
    close: 23,
  },
  [weekdays[5]]: {
    open : 0,
    close: 12 + 12,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]]
  }
};

//const {name, openingHours, categories} = restaurant;

const {name : restaurantName, openingHours: hours, categories: tags} = restaurant;
// const {menu = [], starterMenu: starters = []} = restaurant 
const [starter, mainc] = restaurant.order [2,0];
//destructuring arrays
const arr = [2,3,4];
const a = arr;
const b = arr;
const c = arr;

const [x,y,z] = arr;
console.log(x,y,z);

//switching variables
let[first , , second] = restaurant.categories;
console.log(first , second);

const temp = first;
first = second;
second = temp;

[first , second] = [second , first];

//The for-of loop

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for (const item of menu);

for (const item of menu.entries); 
console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon) console.log(
  restaurant.openingHours.mon.open
);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  restaurant.openingHours[day]?.open || 'closed' 
}