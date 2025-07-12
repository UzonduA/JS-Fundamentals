// Get the first argument from the command line
const input = process.argv[2];

// Convert the input to an integer
const num = parseInt(input);

// Define a recursive function to compute factorial
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1; // Base case: factorial of NaN or 0 is 1
  }
  return n * factorial(n - 1); // Recursive step
}

// Compute and print the factorial of the input
console.log(factorial(num));
