var startItem = document.getElementById("two");
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//change values of siblings' class atr
prevItem.className = "complete";
nextItem.className = "cool";
