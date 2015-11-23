var greet = "Welcome to the calculation table!";

alert(greet);

var choice = prompt("Choose 1 for multiplication, 2 for addition.");

var table = prompt("Choose number for calculation table.");
table = parseInt(table);

var msg = '';
var i = 1;

if (choice == '1') {
    while (i < 11) {
        msg += i + '*' + table + ' = ' + (i * table) + '<br />';
        i++;

    }
} else {
    while (i < 11) {
        msg += i + '+' + table + ' = ' + (i + table) + '<br />';
        i++;

    }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;
