// Get the first argument from the command line
const input = process.argv[2];

// Convert the input to an integer
const count = parseInt(input);

// Check if count is not a number
if (isNaN(count)) {
  // Print error message if input is invalid
  console.log('Missing number of occurrences');
} else {
  // Initialize an empty string to collect the output
  let output = '';

  // Initialize counter for the loop
  let i = 0;

  // Loop count times to add "C is fun" lines
  while (i < count) {
    output += 'C is fun\n';  // Add the line with a newline
    i++;
  }

  // Print all lines at once
  console.log(output.trim());  // trim() removes the last extra newline
}
