console.log("Hello");

let clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period = "PM"
    if (hour >=12) {
        hour = hour - 12;
        period = "PM";
    }
    else {
        period = "AM";
    }
    if (hour < 10) {
        hour= `0${hour}`
    }
    if (minute < 10) {
        minute= `0${minute}`
    }
    if (second < 10) {
        second= `0${second}`
    }
    let time = `${hour} : ${minute} : ${second}  ${period}`;
    document.getElementById("clock").innerText = time;
}
clock();
setInterval(clock, 1000);

