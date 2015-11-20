var hotel = {
    name: "Park",
    rooms: 120,
    booked: 77,
}

hotel.gym = true;
hotel.pool = false;

delete hotel.booked;

//set hotel name
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

//set pool avail
var elPool = document.getElementById('pool');
//elPool.textContent = 'Pool: ' + hotel.pool;
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = 'Gym: ' + hotel.gym;
