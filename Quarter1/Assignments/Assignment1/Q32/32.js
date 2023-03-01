"use strict";
let current_users = ["zaraj", "farhan", "ali", "umer", "afzal"];
let new_users = ["zaraj", "ali", "obaid", "shayan", "hani"];
for (let index = 0; index < new_users.length; index++) {
    if (current_users.includes(new_users[index])) {
        console.log("enter a new user name");
    }
}
