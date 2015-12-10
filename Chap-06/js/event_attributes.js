function checkUserName() {
    var elMsg = document.getElementById("feedback");

    var elUserName = document.getElementById("username");
    if (elUserName.value.length < 5) {
        elMsg.textContent = "Username must be 5 characters or more";
    } else {
        elMsg.textContent = "";
    }
}
