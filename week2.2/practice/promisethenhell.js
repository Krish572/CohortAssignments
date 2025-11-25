class MeriPromise{
    constructor(fn){
        this.fn = fn;
        fn(function() {
            this.resolve.forEach((fun) => fun());
        });
    }

    then(callback){
        if(!this.resolve){
            this.resolve = [];
        }
        this.resolve.push(callback);
    }
}

function setTimeoutPromisified(ms){
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
}

//promise then hell
// setTimeoutPromisified(1000).then(function() {
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(function() {
//         console.log("Hello");
//         setTimeoutPromisified(5000).then(function() {
//             console.log("Hello there");
//         })
//     })
// })

//Promise Chaining 
setTimeoutPromisified(1000).then(function () {
    console.log("Hi");
    return setTimeoutPromisified(3000); // since this returns promise can call .then() function on it.
}).then(function() {
    console.log("Hello");
    return setTimeoutPromisified(5000);
}).then(function () {
    console.log("Hello there");
})

// If its hard to understand then project it via anagram.js
const sortedstr = "hello".split('').sort().join();
//here first "hello" string will split by the delimeter and return array ['h', 'e', 'l', 'l', 'o'], since it is array we can call sort function on it, by calling it, it will return ['e', 'h', 'l', 'l', 'o'], since it is array we can call join function on it, it will return "ehllo" string.



