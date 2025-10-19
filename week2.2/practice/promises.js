// Promise class gives u a promise, that I will return something to u in future. (Just like call back which is called in future)
// Just like the following code setTimeout(fun, 3000), calls fun after 3000ms in future.

// Promises are just syntactically superior way to write instead of callbacks.

function callback(){
    console.log("I am a callback function");
}

setTimeout(callback, 1000);

function setTimeoutPromisified(ms){
    return new Promise(function(resolve) { // Promise class expects a function to be passed and whenever the first argument in that function will be called then whatever you passed inside .then will be called (Ironically first argument == function we pass inside the .then)
        setTimeout(resolve, ms);
    });
}

setTimeoutPromisified(3000).then(callback);  //Syntactically cleaner.

function imediatePromisified(){
    return new Promise(function (resolve) { // Since we are calling the resolve function straight away, so the function we pass inside the then() will get called straight away.
        resolve();
    })
}

const p = imediatePromisified();
p.then(callback);

