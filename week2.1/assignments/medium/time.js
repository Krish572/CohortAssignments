function calculateTime(n){
    const before = new Date();

    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }

    console.log(sum);
    const after = new Date();
    console.log("Difference : " + (after - before)/1000); // Since dif in ms, divide it by 1000 will give us seconds 
}

calculateTime(10000000000);


