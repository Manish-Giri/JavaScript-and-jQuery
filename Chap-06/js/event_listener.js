function checkUserName() {
    var elMsg = document.getElementById("feedback");
    if (this.value.length < 5) {
        elMsg.textContent = "Username must be 5 characters or more";
    } else {
        elMsg.textContent = "";
    }
}


var elUserName = document.getElementById("username");
elUserName.addEventListener("blur", checkUserName, false);
