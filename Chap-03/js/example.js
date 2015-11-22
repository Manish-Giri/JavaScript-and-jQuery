//entire script in IIFE to protect variable scope
(function () {
    //part one: calculate hotel object and write out offer details

    //create hotel object and write out offer details
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }

    };

    //get element references in new variables
    var hotelName = document.getElementById('hotelName');
    var roomRate = document.getElementById('roomRate');
    var specialRate = document.getElementById('specialRate');

    //write out offer details using references
    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();


    //part two: calculate and write out the expiry details for the offer
    //message displayed to user
    var expiryMsg;

    //today's date will be held here
    var today;

    //the element shows the message about the offer ending
    var elEnds;

    function offerExpires(today) {

        //declare variables within function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        //add 7 days time (in milliseconds) 
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        //create arrays to hold num. of days and months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        //collect parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        //create message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    //put today's date in variable
    today = new Date();

    //get offer ends element
    elEnds = document.getElementById('offerEnds');

    //add expiry message
    elEnds.innerHTML = offerExpires(today);

    //finish the IIFE
}());
