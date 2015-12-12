var elUserName = document.getElementById("username");
var elMsg = document.getElementById("feedback");

function checkUserName(minLength) {
    if (elUserName.value.length < minLength) {
        //set errror msg
        elMsg.textContent = "username must be " + minLength + " characters or more";
    } else {
        elMsg.textContent = "";
    }
}

elUserName.addEventListener("blur", function () {
    checkUserName(5);
}, false);
