//select all <h1>-<h6> and add class headline
$(":header").addClass("headline");

//select first three list items and hide and fade them in
$("li:lt(3)").hide().fadeIn(1500);

//remove any list item when clicked
$("li").on("click", function () {
    $(this).remove();
});
