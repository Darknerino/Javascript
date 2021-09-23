function ocena () {
    a = prompt("Podaj ocenę", "");
    a = parseInt(a);

    switch(a) {
        case 1:
            document.querySelector("body").innerHTML = "Niedostateczny";
            break;
        case 2:
            document.querySelector("body").innerHTML = "Dopuszczający";
            break;
        case 3:
            document.querySelector("body").innerHTML = "Dostateczny";
            break;
        case 4:
            document.querySelector("body").innerHTML = "Dobry";
            break;
        case 5:
            document.querySelector("body").innerHTML = "Bardzo Dobry";
            break;
        case 6:
            document.querySelector("body").innerHTML = "Celujący";
            break;
        default:
            document.querySelector("body").innerHTML = "Nie ma takiej oceny";

    }
}