// Get the first argument from the command line
const input = process.argv[2];

// Convert the input to an integer
const count = parseInt(input);

// Check if count is not a number
if (isNaN(count)) {
  // Print error message if input is invalid
  console.log('Missing number of occurrences');
} // Only if count is positive, print "C is fun" count times
else if (count > 0) {
  let output = '';
  let i = 0;

  // Loop count times
  while (i < count) {
    output += 'C is fun\n';
    i++;
  }

  // Print all lines at once, removing the last newline
  console.log(output.trim());
}
// If count is zero or negative, print nothing (no console.log)
