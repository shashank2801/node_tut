const amount = 12

// importing modules
const names = require('./names');
console.log(names);

// if (amount < 10)
//     console.log("Small number");
// else
//     console.log("Large number");

// console.log("hey");

const sayHi = (name) => {
    console.log(`Hello there  ${name}`);
}

sayHi("shashank");
sayHi(names.peter);
sayHi(names.harry);