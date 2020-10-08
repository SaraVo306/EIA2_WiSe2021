"use strict";
var person: string = prompt("Wie ist dein Name?");
window.addEventListener("load", function () {
    document.getElementById("answer").innerHTML = "Hallo " + person + ". Freut mich dass du auf meiner Seite bist!";
});