setInterval(() => {



  d = new Date();
  let daynum = d.getDate()

  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30*htime + mtime/2;
  mrotation = 6*mtime;
  srotation = 6*stime;

  var dayName = d.toString().split(' ')[0];
  let hd = document.getElementById('day').innerHTML = "Today is : " + dayName + "Day"


  let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let month = monthNames[d.getMonth()]
  
  let ghd = document.getElementById('month').innerHTML = "Month : " + month
  let year = d.getFullYear();
  let ghhd = document.getElementById('year').innerHTML = "Year : " + year

/*
  if (month = "January") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "1" + "/" + year


  }
  if (month = "February") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "2" + "/" + year


  }
  if (month = "March") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "3" + "/" + year


  }
  if (month = "April") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "4" + "/" + year


  }
  if (month = "May") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "5" + "/" + year


  }
  if (month = "June") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "6" + "/" + year


  }
  if (month = "July") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "7" + "/" + year


  }
  if (month = "August") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "8" + "/" + year


  }
  if (month = "September") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "9" + "/" + year


  }
  if (month = "October") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "10" + "/" + year


  }
  if (month = "November") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "11" + "/" + year


  }
  if (month = "December") {
    let pp = document.getElementById('pp').innerHTML = "Date : " + daynum + "/"  + "12" + "/" + year


  }*/





var dd = String(d.getDate()).padStart(2, '0');
var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = d.getFullYear();

today = dd  + '/' + mm + '/' + yyyy;

let pp = document.getElementById('pp').innerHTML = "Date : " + today


  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
  let v = htime + ":" + mtime + ":" + stime;
  setInterval(showTime, 1000);
  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hr = 12;
      am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour: hour;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;
    let currentTime = hour + ":"
    + min + ":" + sec +" " + am_pm;
    document.getElementById("clock").innerHTML = currentTime;
  }
  showTime();



},
  1000);