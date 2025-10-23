setTimeout(function () {
    console.log("Hi");
    setTimeout(function () {
        console.log("Hello");
        setTimeout(function () {
            console.log("Hello there");
        }, 5000);
    }, 3000);
}, 1000);

// go to promisethenhell.js to see how promises will overcome callback hell with promise Chaining.