$(document).ready(function () {

    //references to button and form
    var $newItemButton = $("#newItemButton");
    var $newItemForm = $("#newItemForm");
    var $textInput = $("input:text");

    //on page load, hide form and show new item button
    $newItemButton.show();
    $newItemForm.hide();

    //when new item button is clicked, hide it and show form
    $("#showForm").on('click', function () {
        //hide the div containing the new item button
        $newItemButton.hide();
        //show the form instead
        $newItemForm.show();

    });

    //when form is filled and submitted, add the value to end of list, hide form and show new item button again

    $newItemForm.on('submit', function (e) {
        //prevent link click default behavior
        e.preventDefault();

        //get item added in form
        var newText = $("input:text").val();

        //add this new item to end of list
        $("li:last").after('<li>' + newText + '</li>');

        //hide form, show new item button and clear form contents again
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val("");
    });
});
