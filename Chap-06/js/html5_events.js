//setup function to focus on textarea element
function setup() {
	var textInput = document.getElementById("message");
	textInput.focus();
}

//function to check before user leaves
function leave(event) {
	var message = "You have changes that have not yet been saved.";
	(event || window.event).returnValue = message;
	return message;
}

//add event listener to window object 
window.addEventListener("DOMContentLoaded", setup, false);

window.addEventListener("beforeunload", leave);