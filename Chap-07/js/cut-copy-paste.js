$(document).ready(function () {
    var $p = $('p');
    //create a copy of p
    var $clonedQuote = $p.clone();

    //remove original p
    $p.remove();

    //insert clone after h2
    $clonedQuote.insertAfter("h2");
    //$('h2').after($clonedQuote);

    //remove first LI and add to end
    var $moveItem = $("#one").detach();
    $moveItem.appendTo("ul");


});
