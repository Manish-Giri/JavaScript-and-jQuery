var msg = '';
var i = 1;
while (i <= 10) {
    msg += i + '* 5 = ' + (i * 5) + '<br />';
    i++;
}

document.getElementById('answer').innerHTML = msg;
