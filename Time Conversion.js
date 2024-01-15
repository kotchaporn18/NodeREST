function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(remainingSeconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(number) {
    return (number < 10) ? `0${number}` : `${number}`;
}

console.log(digitalClock(5025));   
console.log(digitalClock(61201));  
console.log(digitalClock(87000));  
console.log(digitalClock(156000));  
console.log(digitalClock(69553));