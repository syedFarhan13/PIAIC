"use strict";
let animals = ["dog", "cat", "parrot"];
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    console.log(element);
}
//Modify your program to print a statement about each animal
for (let index = 0; index < animals.length; index++) {
    console.log(" A " + animals[index] + " would make a great pet.");
}
