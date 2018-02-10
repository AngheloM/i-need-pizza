/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/

var order11821 = {
  customerName: "James Franko",
  address: "2155 E Lake Dr",
  city: "Seattle",
  state: "WA",
  zipCode: 11310,
  pizza: [
    "thin",
    "classic marinara",
    "regular"
  ],
  toppings: [
      {veggies: ["olives", "green peppers, spinach"]},
      {meats: ["pepperoni", "ham"]}
  ],
  sideItems: [
    "breadsticks",
    "bbq wings 6 piece"
  ],
  sauces: "ranch",
  specialInstructions: "please cut into squares",
  paymentType: "cash",
  storeId: 112,
  orderTime: "20 minutes"
}

console.log(order11821)

var order11372 = {
  customerName: "Justin Bieber",
  address: "1801 W Rodeo Dr",
  city: "Beverly Hills",
  state: "CA",
  zipCode: 91833,
  pizza: [
    "stuffed crust",
    "creamy garlic alfredo",
    "double"
  ],
  toppings: [
    {veggies: ["onion", "anchovies", "mushrooms"]},
    {meats: ["chicken", "bacon"]}
  ],
  sideItems: "double fudge brownie dessert",
  sauces: [
  "bbq",
  "garlic sauce"
  ],
  specialInstructions: "call 815 at the gate",
  paymentType: "credit card",
  storeId: 382
}

console.log(order11372)
/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/

var currentOrders = {
  order11821: [
    "James Franko",
    "2155 E Lake Dr",
    "Seattle",
    "WA",
    11310,
    "thin",
    "classic marinara",
    "regular",
    "olives",
    "green peppers",
    "spinach",
    "pepperoni",
    "ham",
    "breadsticks",
    "bbq wings 6 piece",
    "ranch",
    "please cut into squares",
    "cash",
    112,
    "20 minutes"
], 
  order11372: [
    "Justin Bieber",
    "1801 W Rodeo Dr",
    "Beverly Hills",
    "CA",
    91833,
    "stuffed crust",
    "creamy garlic alfredo",
    "double",
    "onion",
    "anchovies",
    "mushrooms",
    "chicken",
    "bacon",
    "double fudge brownie dessert",
    "bbq",
    "garlic sauce",
    "call 815 at the gate",
    "credit card",
    382
]
}


console.log(currentOrders)
/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
