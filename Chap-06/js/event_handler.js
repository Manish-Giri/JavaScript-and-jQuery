function checkUserName() {
    var elMsg = document.getElementById("feedback");
    if (this.value.length < 5) {
        elMsg.textContent = "Username must be 5 characters or more";
    } else {
        elMsg.textContent = "";
    }
}

//get username input
var elUsername = document.getElementById("username");

//when it loses focus, call checkusername()
elUsername.onblur = checkUserNameame;
