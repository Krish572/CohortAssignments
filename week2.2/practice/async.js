function setTimeoutPromisified(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function fun() {
    await setTimeoutPromisified(1000);
    console.log("Hi");
    await setTimeoutPromisified(2000);
    console.log("Hello");
    await setTimeoutPromisified(3000);
    console.log("Hello There!");
}

fun();