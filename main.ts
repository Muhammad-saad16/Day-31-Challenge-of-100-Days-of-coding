//           🚀 Day 31 Challenge: Start Coding! 🚀


// Question 91: 
// Create an array of your three favorite fruits and add a new fruit to the end of the array.

let fruits: string [] = ["Apple","Mango","WaterMelon"]
fruits.push("Banana");

console.log(fruits); // output is [ 'Apple', 'Mango', 'WaterMelon', 'Banana' ]


// Question 92:
// Write a function to remove the last element from an array and return the removed element.
// This function removes the last element from an array and returns it


let fruit: string[] = ["Apple", "Banana", "Cherry"];

function removeLastElement(remove: string[]): string | undefined {
    return remove.pop(); // Removes and returns the last element of the array
}

console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']



// Question 93:
// Find the index of "Banana" in an array of fruits and replace it with "Mango".

let fruitt: string[] = ["Apple", "Banana", "Cherry"];

fruits[1] = "Mango";

console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']




