"use strict";
window.addEventListener("load", function () {
    let person = prompt("Wie lautet dein Name?", "");
    if (person != null) {
        document.getElementById("name").innerHTML = "Hallo " + person + ", wie geht es dir heute?";
    }
});
//mithilfe von W3Schools//
//# sourceMappingURL=script.js.map