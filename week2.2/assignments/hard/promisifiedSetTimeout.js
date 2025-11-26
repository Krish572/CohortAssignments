function wait(n){
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log("Promise resolved");
            resolve();
        }, n * 1000);
    })
}

wait(5);

