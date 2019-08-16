var initialDate = new Date('Tue Aug 13 2019 20:00:00 GMT+0200');
var initialRotations = {
    mercury: 55,
    venus: 310,
    earth: 130,
    mars: 299,
    jupiter: 185,
    saturn: 163,
    uranus: 57,
    neptune: 104
}; // in degrees

var orbitTimes = {
    mercury: 7603200,
    venus: 19414080,
    earth: 31558153,
    mars: 59356800,
    jupiter: 374335776,
    saturn: 929577600,
    uranus: 2651486400,
    neptune: 5199724800
}; // in seconds

var currentDate = new Date();
var secondsSinceInitialDate = (currentDate.getTime() - initialDate.getTime()) / 1000;
function getCurrentRotationForPlanet(planetName) {
    return (secondsSinceInitialDate / orbitTimes[planetName]) * 360 + initialRotations[planetName];
}

Object.keys(initialRotations).forEach(function (planetName) {
    var currentRotation = getCurrentRotationForPlanet(planetName);
    var el = document.querySelector('.primary.' + planetName);
    el.style.transform = 'rotate(' + currentRotation + 'deg)';
    el.classList.add('anim');
});

function toHHMMSS(date) {
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}


setInterval(function() {
    var date = new Date();
    document.querySelector('.time span').innerHTML = toHHMMSS(date);
}, 500);

setInterval(function() {
    var date = new Date();
    document.querySelector('.title span').innerHTML = date.toLocaleDateString();
}, 500);
