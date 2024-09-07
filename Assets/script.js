function rotate(direction) {
    var div = document.getElementById("selectedCircle");
    if (direction === "right") {
        div.style.transform = "rotate(90deg)";
    } else if (direction === "left") {
        div.style.transform = "rotate(-90deg)";
    }
}