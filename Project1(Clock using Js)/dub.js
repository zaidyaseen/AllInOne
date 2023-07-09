let a;
let date;
let time;
let a1;
let date1;
let time1;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
const options1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
setInterval(() => {
    var date3 = new Date();
    var opt3 = { timeZone: 'Asia/Dubai' }; // specify the desired timezone
    var ts3 = date3.toLocaleString('en-US', opt3);
    console.log(ts3);
    document.getElementById('time3').innerHTML = ts3
    document.getElementById('time2').innerHTML = ts1
}, 1000);