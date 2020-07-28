

// Interval for Every Second

setInterval(_ => updateUi(), 1000);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const tHour = document.getElementById('hours');
const tMinutes = document.getElementById('minutes');
const tSeconds = document.getElementById('seconds');
const dateText = document.getElementById('date-text');
const timeText = document.getElementById('time-text');

function parseDateTime() {
    let date = new Date();

    let obj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds(),
        day: date.getDate(),
        month: date.getMonth()
    }

    return obj;
}

function getRotation(current, from) {
    let per = (current / from) * 100;
    return 360 * (per / 100);
}

function preety(number) {
    if(number > 9) return number;
    return '0' + number;
}


function updateUi() {
    const timeObj = parseDateTime();
    tHour.style.transform = `rotate(${getRotation(timeObj.hour, 12)}deg)`;
    tMinutes.style.transform = `rotate(${getRotation(timeObj.minute, 60)}deg)`;
    tSeconds.style.transform = `rotate(${getRotation(timeObj.seconds, 60)}deg)`;

    // Update Time And Dates

    dateText.innerText = timeObj.day;
    dateText.setAttribute('data-after', months[timeObj.month]);

    timeText.innerText = `${preety(timeObj.hour > 11 ? timeObj.hour - 12 : timeObj.hour)}.${preety(timeObj.minute)}`;
    timeText.setAttribute('data-after', timeObj.hour > 11 ? 'PM' : 'AM');
}