"use strict";
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
show_magicians(magicians);
make_great(magicians);
console.log("After adding 'the Great' to each magician's name:");
show_magicians(magicians);
