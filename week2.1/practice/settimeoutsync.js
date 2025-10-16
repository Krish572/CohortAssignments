function setTimoutSync(fun, time) {
    let startTime = new Date();
    while (true){
        let currentTime = new Date();
        if(currentTime - startTime > time){
            fun();
            break;
        }
    }
}

setTimoutSync(function () {
    console.log("Hi.....");
} ,1000);