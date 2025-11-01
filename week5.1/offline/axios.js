const axios = require("axios");

async function callAxios(){
    const res = await axios.post("https://httpdump.app/dumps/de79c9fb-a3fa-4ef2-b9f9-1779ac688a4d?a=5&b=6",{
        "username": "krishna",
        "password" : "123456"
    }, {
        headers : {
            "Content-Type": "application/json"
        }
    });
    console.log(res.data);
}

async function ealrierAxios() {
    const res = await axios({
        url : "https://httpdump.app/dumps/de79c9fb-a3fa-4ef2-b9f9-1779ac688a4d",
        method : "GET",
        headers: {
            Authorization : "djkfnjkd",
            "Content-Type": "application/json"
        },
        data : {
            "username": "Krishna",
            "password": "123456"
        }
    })
}

// callAxios();
ealrierAxios();