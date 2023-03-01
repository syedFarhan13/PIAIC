"use strict";
function make_shirt(size = "large", message = " i love typescript.") {
    console.log("The shirt is " + size + " and the message on the shirt is " + message);
}
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Typescript is awesome"); // Small shirt with custom message
