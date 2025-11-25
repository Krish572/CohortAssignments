function fetchPromisified(url){
    return new Promise(function(resolve, reject) {
        fetch(url)
        .then(function() { resolve(response)})
        .catch(function () { reject(err)})
    })
}

function getRes(res){
    console.log(res);
}

fetchPromisified("www.google.com")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));