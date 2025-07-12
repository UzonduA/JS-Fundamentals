/* My work flow explained. First I created an array containing the 3 lines to be printed and then 
initialized an empty string to collect all lines as we would need only one console.log.
Then I used a for loop to go through each, then added  the current message to the output string, 
followed by a newline. And finally printed the output using a single console.log
*/
const messages = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

let output = '';

for (let i = 0; i < messages.length; i++) {
  output += messages[i] + '\n';
}

console.log(output);
