
"use strict";
var person: string = prompt("Please enter your name");
if (person != null) {
    document.getElementById("demo").innerHTML =
        "Hey " + person + "! How are you doing? :)";
}