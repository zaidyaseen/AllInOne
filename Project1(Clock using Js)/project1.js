let a;
let date;
let time;
let a1;
let date1;
let time1;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
const options1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
setInterval(() => {
    var date2 = new Date();
    var opt2 = { timeZone: 'Australia/NSW' }; // specify the desired timezone
    var ts2 = date2.toLocaleString('en-US', opt2);
    console.log(ts2);
    document.getElementById('time1').innerHTML = ts2
    document.getElementById('time2').innerHTML = ts1
}, 1000);


