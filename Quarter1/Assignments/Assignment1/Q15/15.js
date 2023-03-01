"use strict";
let guest_list = ["Ali", "Abdullah", "Farhan", "Shayan"];
for (let index = 0; index < guest_list.length; index++) {
    console.log("Hello " + guest_list[index] + " I would like to invite you at dinner.");
}
// Abdullah is not comming
console.log("Abdullah is not not comming");
//kumail is comming 
guest_list[1] = "kumail";
console.log(guest_list);
for (let index = 0; index < guest_list.length; index++) {
    console.log("Hello " + guest_list[index] + " I would like to invite you at dinner.");
}
