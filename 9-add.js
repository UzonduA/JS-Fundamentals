// Get the first and second arguments from the command line
const firstArg = process.argv[2];
const secondArg = process.argv[3];

// Convert both arguments to integers
const a = parseInt(firstArg);
const b = parseInt(secondArg);

// Define the add function that takes two numbers and returns their sum
function add(a, b) {
  return a + b;
}

// Call the add function and print the result
console.log(add(a, b));
