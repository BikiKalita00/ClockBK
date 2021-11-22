setInterval(() => {



    d = new Date();

    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    var dayName = d.toString().split(' ')[0];
    let hd = document.getElementById('day').innerHTML = "Today is : " + dayName + "Day"


    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    let month = monthNames[d.getMonth()]
    let ghd = document.getElementById('month').innerHTML = "Month : " + month
    let year = d.getFullYear();
    let ghhd = document.getElementById('year').innerHTML = "Year : " + year

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
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      let currentTime = hour + ":" +
        min + ":" + sec + " " + am_pm;
      document.getElementById("clock").innerHTML = currentTime;
    }
    showTime();



  },
  1000);