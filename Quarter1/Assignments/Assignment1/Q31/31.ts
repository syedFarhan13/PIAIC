let user= ["Aftab","zaraj","Ali"];
let userLen = user.length;
if (userLen == 0) {
    console.log("we need to find some users!")
    }
else{
    for (let index = 0; index < userLen; index++) { 
    
    user.pop();
    
} 
}
console.log(user);