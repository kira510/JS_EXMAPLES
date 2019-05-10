function clock () {
    const secondsHand = document.querySelector('.second-hand');

    const now =  new Date();
    var seconds = now.getSeconds();
    console.log(seconds)
    if (seconds === 0) {
        seconds = 60;
    }
    const secDeg = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secDeg}deg)`;

    const minsHand = document.querySelector('.min-hand');

    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + (seconds/60) + 90;
    minsHand.style.transform = `rotate(${minDeg}deg)`;


    const hoursHand = document.querySelector('.hour-hand');

    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + ((min/60)*30) + 90;
    hoursHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(clock, 1000);