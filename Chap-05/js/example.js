//adding items to start and end of list
var list = document.getElementsByTagName('ul')[0];

//add new item to end of list
var newItemLast = document.createElement("li");
var newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

//add new item to start of list
var newItemFirst = document.createElement("li");
var newTextFirst = document.createTextNode("kale");
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild); //add element to start of list


//select all li elements
var listItems = document.querySelectorAll("li");

//add a class of cool to all lis
for (var i = 0; i < listItems.length; i++) {
    listItems[i].className = "cool";
}

//add number of items in list to the heading
var heading = document.querySelector("h2");
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;

//content
var newHeading = headingText + "<span>" + totalItems + "</span>";
heading.innerHTML = newHeading; //update h2
