function showDate() {
    var dNow = new Date();
    var utcdate= (dNow.getMonth()+ 1) + '/' + dNow.getDate() + '/' + dNow.getFullYear();
    $('#currentDay').text(utcdate);
}
showDate();