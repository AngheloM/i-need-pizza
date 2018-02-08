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
  zipCode: "11310",
  pizza: [
    "thin",
    "robust marinara",
    "regular"
  ],
  toppings: [
      { veggies: "olives", "green peppers"},
      {meats: "pepperoni", "ham", "sausage"}
  ] 
}

console.log(order11821.pizza[1])
/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
