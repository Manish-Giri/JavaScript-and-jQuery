var elements = document.getElementsByTagName("li");
if (elements.length > 0) {
    var el = elements[0]; //if list has 1 or more items, get reference to first item, can also use item() syntax
    el.className = "cool";
}
