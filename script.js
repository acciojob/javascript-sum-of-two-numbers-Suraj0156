let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");
function sumOfTwoNumbers(a, b) {
  //Write your code here
   let sum = a + b;
  console.log(sum);

  
}




/*Do not change the code below */
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

reader.on("line", (line) => {
  if (!a) {
    a = parseInt(line);
  } else if (!b) {
    b = parseInt(line);
    sumOfTwoNumbers(a, b)
    reader.close();
  } else {
    // we already have both variables, do nothing
  }
});


// Write your code here and print the output using alert function
