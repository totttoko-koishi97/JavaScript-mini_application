"use strict"

let name = prompt("Who is there?", "");

if (name == "Admin") {
    let pass = prompt("password?", "")
    if (pass == "TheMaster") {
        alert("Welcome!");
    }
    else if (pass == null) {
        alert("Canceled");
    }
    else {
        alert("Wrong passwprd");
    }
}
else if (name == null) {
    alert("Canceled");
}
else {
    alert("I dont know you");
}
T