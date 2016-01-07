$(document).ready(function () {
    var IDs = "";
    var $listItems = $("li");

    $($listItems).on("mouseover click", function () {
        IDs = this.id;
        $listItems.children("span").remove();
        $(this).append(' <span class="priority">' + IDs + '</span>');
    });

    //mouseout method to trigger removal of any child <span>
    //elements to prevent build-up of added values
    $($listItems).on("mouseout", function () {
        $(this).children("span").remove();
    });
});
