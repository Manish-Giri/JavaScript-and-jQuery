//declare variables
var elList, addLink, newEl, newText, counter, listItems;

//get reference to listItems
elList = document.getElementById("list");
//get reference to add item button
addLink = document.querySelector("a");
//get reference to item counter
counter = document.getElementById("counter");


//function to add a list item when add item button is clicked
function addItem(e) {

	//prevent default action using event object
	e.preventDefault();
	//create and store new list item in DOM
	newEl = document.createElement("li");
	newText = document.createTextNode("New list item");
	newEl.appendChild(newText);
	elList.appendChild(newEl);
}

//function to update item counts when new list item added to DOM
function updateCount() {
	listItems = document.getElementsByTagName("li").length;
	counter.innerHTML = listItems;
}

//add event listeners
addLink.addEventListener("click", addItem, false);
elList.addEventListener("DOMNodeInserted", updateCount, false);