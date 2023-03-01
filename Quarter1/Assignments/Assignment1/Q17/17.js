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
//----------------Bigger table Found-------------
console.log("I have found a bigger table");
//----Add one new guest to the beginning of your array.
guest_list.splice(0, 0, "fazal");
console.log(guest_list);
//----Add one new guest to the middle of your array.
console.log(guest_list);
let middleIndex = Math.floor(guest_list.length / 2);
guest_list.splice(middleIndex, 0, "taqi");
console.log(guest_list);
guest_list.push("Eve");
console.log(guest_list);
for (let i = 0; i <= 6; i++) {
    console.log("Dear " + guest_list[i] + " I would please come to my party on Saturday at 7pm  ");
}
console.log("I only can invite 2 people for dinner.");
let numofguest = guest_list.length;
let notcommingguest = numofguest - 2;
for (let index = 0; index < notcommingguest; index++) {
    console.log("hi " + guest_list[guest_list.length - 1] + " i am sorry but you are not invited");
    guest_list.pop();
    console.log(guest_list);
}
for (let index = 0; index <= 1; index++) {
    console.log("hi " + guest_list[index] + " You are still invited.");
}
for (let index = 0; index <= 1; index++) {
    guest_list.pop();
}
console.log(guest_list);
