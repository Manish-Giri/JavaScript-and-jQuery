//gets event target based on browser type 
function getTarget(e) {
    if (!e) {
        e = window.event;
    }

    return e.target || e.srcElement;
}

//function to remove item that's marked completed from list
function itemDone(e) {

    var target, elParent, elGrandParent;
    //get item clicked
    target = getTarget(e);
    //get the list item of clicked link <a>
    elParent = target.parentNode;
    //get the ul
    elGrandParent = elParent.parentNode;
    //remove list item from  list
    elGrandParent.removeChild(elParent);

    //prevent link from taking to php link
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        //use IE version
        e.returnValue = false;
    }

}

//setup event listeners to call itemDone() on click
var el = document.getElementById("shoppingList");

//if event listeners are supported
if (el.addEventListener) {
    el.addEventListener('click', function (e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function (e) {
        itemDone(e);
    });

}
