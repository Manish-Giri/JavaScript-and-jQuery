$(document).ready(function () {
    //removes class hot from first two LIs
    $('li:lt(2)').removeClass('hot');

    //adds class complete to first LI
    $('li').eq(0).addClass('complete');

    //adds class cool to 4th LI
    $('li:gt(2)').addClass('cool');
});
