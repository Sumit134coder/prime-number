var readlineSync = require('readline-sync');
var chalk = require('chalk');

var number = readlineSync.question(chalk.bold.blue("enter a number "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(chalk.bold.yellow(`${number} is a prime number`));
    } else {
        console.log(chalk.bold.red(`${number} is a not prime number`));
    }
}
