function wait(s){
    return new Promise((resolve) => {
        setTimeout(resolve, s * 1000);
    })
}

function calculate(t1, t2, t3){
    return Promise.all([wait(t1), wait(t2), wait(t3)]);
}

async function calculateAsync(t1, t2, t3){
    let startTime = new Date().getTime();
    await Promise.all([wait(t1), wait(t2), wait(t3)]);
    let timeTaken = new Date().getTime() - startTime;
    console.log(timeTaken);
}

const startTime = Date.now()

calculate(1, 2, 4)
.then(() => {
    const timeTaken = Date.now() - startTime;
    console.log(timeTaken + "ms");
})
.catch((err) => {
    console.log("error: "+ err);
})

calculateAsync(1, 2, 4); // now we can see that it's not taking 8 secs, because all the settimeouts will be handled by webapi's. first calculate(1,2,4) function will called, that will return promise which resolved after 4 sec(since the asynchronous can handled by webapi's not required computation power, thread will be free and move forward to calculateAsyn() and run it which also take around 4sec's)
