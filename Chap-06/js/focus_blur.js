//script to display a tip when a form is in focus and display a warning when a form loses focus AND criteria is not met

function checkUsername() {
    var username = el.value;
    if (username.length < 5) {
        elMsg.className = "warning";
        elMsg.textContent = "Not long enough, yet...";
    } else {
        elMsg.textContent = "";
    }
}

function tipUsername() {
    elMsg.className = "tip";
    elMsg.innerHTML = "Username must be at least 5 characters";
}

var el = document.getElementById("username");
var elMsg = document.getElementById("feedback");

//when the username input gains/loses focus, call corresponding function
el.addEventListener("focus", tipUsername, false);
el.addEventListener("blur", checkUsername, false);
