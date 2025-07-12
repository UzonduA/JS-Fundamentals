// Get the first argument from the command line
const input = process.argv[2];

// Convert input to an integer
const size = parseInt(input);

// Check if size is a valid number
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Initialize counter for the loop
  let i = 0;

  // Loop to print each row of the square
  while (i < size) {
    // Print a line of X repeated 'size' times
    console.log('X'.repeat(size));
    i++;
  }
}
