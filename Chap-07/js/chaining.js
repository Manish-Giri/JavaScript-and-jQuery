//$("li[id!='one']").hide().delay(500).fadeIn(1400);
//$('li:first-child').addClass('next');
//$('li.priority').addClass('highlight');

$(document).ready(function () {
    //$("li[id!='one']").hide().delay(500).fadeIn(1400);
    $("li[id!='one']").click(function () {
        $(this).remove();
    });

});
