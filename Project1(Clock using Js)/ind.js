setInterval(() => {
    var date1 = new Date();
    var opt1 = { timeZone: 'Asia/Kolkata' }; // specify the desired timezone
    var ts1 = date1.toLocaleString('en-US', opt1);
    console.log(ts1);
    document.getElementById('time2').innerHTML = ts1
    document.getElementById('time1').innerHTML = ts2
}, 1000);