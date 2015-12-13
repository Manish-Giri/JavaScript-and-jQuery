//function to check length of text entered in input field, and if there's an error - show it in the empty sibling element
function checkUsername(e, minLength) {
    var el, elMsg;
    if (!e) {
        e = window.event;
    }
    
    //get target of event
    el = e.target || e.srcElement;
    
    //get its next sibling
    elMsg = el.nextSibling;
    
    //check value of input entered
    if (el.value.length < minLength) {
        elMsg.innerHTML = "Username must be " + minLength + " characters or more.";
    }
    
    else {
        //otherwise clear msg
        elMsg.innerHTML = "";
    }
}

var elUsername = document.getElementById("username");
//check if browser is IE5-8 or not
if(elUsername.addEventListener) {
    elUsername.addEventListener('blur', function(e) {
        checkUsername(e, 5);
    }, false);
}

else {
    elUsername.attachEvent("onblur", function(e) {checkUsername(e,5)});
}
