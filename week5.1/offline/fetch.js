

function getTodos(){
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

function getTodos1(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(async (res) => {
        const data = await res.json();
        console.log(data);
    })
}

function getTodos2(){
    return fetch("https://jsonplaceholder.typicode.com/posts").then( (res) => {
        return res.json();
    })
}

async function getTodos3(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
}

// getTodos2().then((data) => console.log(data));

getTodos3();

// getTodos1();