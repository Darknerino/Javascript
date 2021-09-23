function a () {
    if (document.querySelectorAll("input")[1].value != document.querySelectorAll("input")[2].value) {
        document.querySelector("div").innerHTML = "<p style='color:red;'>Hasła nie są takie same!</p>";
    }
    else if (document.querySelectorAll("input")[1].value == "" || document.querySelectorAll("input")[2].value == "") {
        document.querySelector("div").innerHTML = "<p style='color:red;'>Pole hasło nie może być puste!</p>";
    }
    else {
        document.querySelector("div").innerHTML = "<p style='color:green;'>Hasła są poprawne!</p>";
    }
}