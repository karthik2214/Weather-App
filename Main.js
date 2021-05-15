const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempStatus = "clouds";

const getCurrDate = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currTime = new Date();
    let day = weekday[currTime.getDay()];
    return day;
}

const getCurrTime = () => {

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ]

    let now = new Date();
    let month = months[now.getMonth()];
    let date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let period = "AM";

    if (hours > 11) {
        period = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }

    return `${month} ${date} | ${hours}:${mins}${period}`;
}

curDate.innerHTML = getCurrDate()  + " | " + getCurrTime();
