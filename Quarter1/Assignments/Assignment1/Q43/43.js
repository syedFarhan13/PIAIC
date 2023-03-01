"use strict";
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(magicians[i] + " the Great");
    }
    return great_magicians;
}
let magicians = ["MAX MAVEN", "MASKED MAGICIAN", "JAY MARSHALL"];
let great_magicians = make_great(magicians.slice());
show_magicians(magicians);
show_magicians(great_magicians);
