function age() {
    var a = 2020;
    var b = document.getElementById("birthdate").value;
    var c = a - b;
    document.getElementById("ergebnis").innerText = c;
}