$(document).ready(function () {
    var $h2 = $('h2');
    //hide UL
    $('ul').hide();
    $h2.append('<a class="show">show</a>');

    $h2.on('click', function () {
        //select next sibling with .next() - UL
        //find child elements of UL with .hot and addclass .complete
        $h2.next().fadeIn(500).children('.hot').addClass('complete');

        //hide the show button now that list is visible 
        $h2.find('a').fadeOut();
    });
});
