var el;

//function to count number of characters left and last character pressed
function charCount(e) {
    var textEntered = document.getElementById("message");
    var charDisplay = document.getElementById("charactersLeft");

    //with 30 allowed characters, find out num. of chars left
    var counter = (30 - textEntered.value.length);

    //post that number on screen
    charDisplay.textContent = "Number of characters left = " + counter;

    //get last key's value
    var lastKey = document.getElementById('lastKey');
    lastKey.textContent = "Last key pressed in ASCII code = " + e.keyCode;


}

//attach event listener on the textarea element
el = document.getElementById("message");
el.addEventListener("keypress", charCount, false);
