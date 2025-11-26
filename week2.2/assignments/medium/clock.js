// let sec = 0;

// setInterval(function () {
//     sec++;
//     console.log(sec);
// }, 1000);

// function updateCount(){
//     sec++;
//     console.log(sec);
//     set
// }


//Ideal time in wierd format......
// setInterval(() => {
//     date++;
//     console.log(date);
// }, 1000);

let date = new Date();

function formateDate(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let meredian = hours >= 12 ? "PM" : "AM";

    hours = hours%12;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${meredian}`;
}

function updateTime(){
    const time = new Date();
    console.log(formateDate(time));

    setTimeout(updateTime, 1000);
}

updateTime();


// setInterval(() => {
//     let time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();

//     let meredian = hours >= 12 ? "PM" : "AM";

//     let normalHours = hours%12;

//     hours = String(hours).padStart(2, '0');
//     minutes = String(minutes).padStart(2, '0');
//     seconds = String(seconds).padStart(2, '0');

//     console.log(`${hours}:${minutes}:${seconds}`);
//     console.log(`${normalHours}:${minutes}:${seconds} ${meredian}`);
// }, 1000)

// console.log(formateDate(date));

