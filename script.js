function change() {
    document.getElementById("demo").innerHTML = "change";
}
function run(event) {
    console.log(event);
    if (event.keyCode == 82) { // r
        document.body.style.backgroundColor = 'yellow';
    } else if (event.keyCode == 65) { // a
        document.body.style.backgroundColor = 'red';
    }
}