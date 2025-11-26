function sleep(ms){
    return new Promise((resolve) => {
        const startTime = new Date().getTime();
        while(new Date().getTime() > startTime + ms);
        console.log("resolved");
        resolve();
    })
}

sleep(2000);
console.log("hi there"); // even though sleep is async function, it actually using thread. 

