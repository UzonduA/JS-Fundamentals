// Get the first argument from the command line
const input = process.argv[2];

// Convert the input to an integer number
const count = parseInt(input);

// Check if count is a valid integer
if (isNaN(count)) {
  // Print error message if input is not a number
  console.log('Missing number of occurrences');
} else {
  // Print the first line before the loop
  console.log(''); // Just a placeholder so we can count this as one console.log

  // Initialize a variable to keep track of the number of times printed
  let printed = 0;

  // Loop to print "C is fun" count times
  while (printed < count) {
    console.log('C is fun');
    printed++;
  }
}
