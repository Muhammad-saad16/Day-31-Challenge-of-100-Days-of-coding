"use strict";
//           🚀 Day 31 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 91: 
// Create an array of your three favorite fruits and add a new fruit to the end of the array.
let fruits = ["Apple", "Mango", "WaterMelon"];
fruits.push("Banana");
console.log(fruits); // output is [ 'Apple', 'Mango', 'WaterMelon', 'Banana' ]
// Question 92:
// Write a function to remove the last element from an array and return the removed element.
let fruit = ["Apple", "Mango", "WaterMelon"];
function removeLastElement(remove) {
    return remove.pop();
}
console.log(removeLastElement(fruit)); // output is WaterMelon
