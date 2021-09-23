function obl () {
    a = document.querySelectorAll("input")[0].value;
    b = document.querySelectorAll("input")[1].value;
    c = document.querySelectorAll("input")[2].value;

    if (a == b && b == c) {
        document.querySelector("div").innerHTML = "Trójkąt jest równoboczny";
    }
    else if (a == b || b == c || c == a) {
        document.querySelector("div").innerHTML = "Trójkąt jest równoramienny";
    }
    else {
        document.querySelector("div").innerHTML = "Trójkąt jest różnoboczny"
    }
}