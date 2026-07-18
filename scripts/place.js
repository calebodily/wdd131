const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = document.lastModified;


const temp = document.querySelector("#temp").textContent;
const wind_speed = document.querySelector("#wind").textContent;
let tempclean = parseFloat(temp.replace(/[^0-9.-]/g, ""));
let wind_speedclean = parseFloat(wind_speed.replace(/[^0-9.-]/g, ""));

function calculateWindChill(temp, wind_speed) {
    if (temp <= 10 && wind_speed > 4.8) {
        const windChill = 35.74 + .6215 * temp - 35.75 * wind_speed ** .16 + .4275 * temp * wind_speed ** .16
        return Math.round(windChill)
    }
    else {
        return "none"
    }
}


document.querySelector('#windchill').textContent = calculateWindChill(tempclean, wind_speedclean);