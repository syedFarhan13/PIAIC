let username = ["Farhan","Shayan","Ali","Abid","Admin"];
for (let index = 0; index < username.length; index++) {
    if (username[index] == "Admin" ) {
        console.log("Hello admin, would you like to see a status report")
        
    } else {
        console.log("hello " + username[index] + " thank you for logging in again");
        
    }
    
}