$(document).ready(function () {
    //hide h2 then slide it down(in)
    $('h2').hide().slideDown();

    var $li = $("li");
    //hide list items then fade them in
    $li.hide().each(function (index) {
        $(this).delay(700 * index).fadeIn(700);
    });

    $li.on('click', function () {
        $(this).fadeOut(700);
    });
});
