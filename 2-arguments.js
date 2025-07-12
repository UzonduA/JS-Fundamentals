/* Write a script that prints a message depending of the number of arguments passed:

    If no arguments are passed to the script, print “No argument”
    If only one argument is passed to the script, print “Argument found”
    Otherwise, print “Arguments found”
    You must use console.log(...) to print all output
    You are not allowed to use var
*/

let count = 0;
for(let a = 2; a < process.argv.length; a++)
     {count++};
if(
    count === 0){
        console.log("No argument");
    }
else if(
    count === 1){
        console.log("Argument found");
    }
   else{console.log("Arguments found");}
 