var elements = document.getElementsByClassName("hot");

if (elements.length > 2) {
    var el = elements[2]; //select third item from nodelist
    el.className = "cool";
}
