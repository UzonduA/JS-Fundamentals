// Gets the first argument passed by the user (3rd item in process.argv)
const argument = process.argv[2];

// Converts the argument to a number using Number()
const number = Number(argument);

// Checks if the converted value is a number
// isNaN(number) returns true if it's NOT a valid number
if (!isNaN(number) && argument !== undefined) {
  // If it's a valid number, convert it to integer and print it
  console.log('My number: ' + parseInt(number));
} else {
  // If it's not a number or nothing was passed, print this message
  console.log('Not a number');
}
