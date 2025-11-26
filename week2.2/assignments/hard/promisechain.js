function wait(s){
    return new Promise((resolve) => {
        setTimeout(resolve, s * 1000);
    })
}

function calculateTime(t1, t2, t3){
    const startTime = new Date();
    wait(t1)
    .then(() => {
        return wait(t2);
    }).then(() => {
        return wait(t3);
    }).then(() => {
        let totalTime = new Date() - startTime;
        console.log(totalTime + "ms");
    }).catch((err) => {
        console.log("Error : " + err);
    })
    console.log("hi there inside");
}

calculateTime(1, 2, 3); 
//refer to filecleaner.js in medium directory, in that file when we write function same like this it does work the same but in call back way.

console.log('HI there');


