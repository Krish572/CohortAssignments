let c = 0;

function updateCounter(){
    c++;
    console.log(c);

    setTimeout(updateCounter, 1000);
}

updateCounter();