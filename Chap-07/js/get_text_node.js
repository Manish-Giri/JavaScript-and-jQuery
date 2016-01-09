//selects all four list items, get text from each of them 
//then appends the text to every li2

var $listItemText = $("li").text();
$("li").append("<i>" + $listItemText + "</i>");
