function okienko () {
    a = prompt("Jaki jest dzisiaj dzień tygodnia?", "");

    if (5 >= a >= 1) {
        document.querySelector("body").innerHTML = "Dzień Roboczy";
    }
    else if (a == 6 || a == 7) {
        document.querySelector("body").innerHTML = "Weekend";
    }
    else {
        document.querySelector("body").innerHTML = "Nie ma takiego dnia tygodnia";
    }
}