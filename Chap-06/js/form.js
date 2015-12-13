//get reference to variables
var elForm = document.getElementById("formSignup");
var elSelectPackage = document.getElementById('package');
var elPackageHint = document.getElementById('packageHint');
var elTerms = document.getElementById('terms');
var elTermsHint = document.getElementById('termsHint');

//function to check what option was selected and give a hint
//accordingly
function packageHint() {

    //get the option chosen
    var pack = this.options[this.selectedIndex].value;

    if (pack === "monthly") {
        elPackageHint.innerHTML = "Save $10 if you pay for 1 year instead";
    } else {
        elPackageHint.innerHTML = "Wise choice!";
    }
}


//FORM VALIDATION - function to check is terms checkbox was selected
function checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = "You must agree to the terms.";
        event.preventDefault(); //prevent form being submitted 
    }

}

//apply event listeners
elForm.addEventListener("submit", checkTerms, false);
elSelectPackage.addEventListener("change", packageHint, false);
