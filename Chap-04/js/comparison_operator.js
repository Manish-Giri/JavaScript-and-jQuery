var pass = 60;
var score = 90;

var hasPassed = score >= pass;

var el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;
