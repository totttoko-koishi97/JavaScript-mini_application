"use strict"

let name = prompt("Who is there?", "Admin");

if (name == "Admin") {
    let pass = prompt("password?", "TheMaster")
    if (pass == "TheMaster") {
        alert("Welcome!");
    }
    else if (pass == "") {
        alert("Canceled");
    }
    else {
        alert("Wrong passwprd");
    }
}
else if (name == "") {
    alert("Canceled");
}
else {
    alert("I dont know you");
}
T