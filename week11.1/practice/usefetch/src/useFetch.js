import { useEffect } from "react";
import { useState } from "react";


//Now we can see whenever the url get's changed the app.jsx will change re-render and that makes useFetch to call again and since url changed and added as dependecy to the useEffect, it will called again and we will get current url info.
//small bug in this is when run this on browser, initially it will black and after sometime postdata will be mounted, since it is asynchrounous we can better that.
export function useFetch(url){
    const [post, setPost] = useState({});

    async function getPost(){
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
    }
    
    useEffect(() => {
       getPost(); 
    }, [url])

    return {
        post
    }
}

//At first I thought it will work fine, we are passing the url from the component where we need to use this logic. But when we try to use it for the multiple url's (main reason we wrote for that only right), useFetch function will get called but getPost() function inside the useEffect will not get called because it's dependency array is empty so it will run only when component mounts.
// export function useFetch(url){
//     const [post, setPost] = useState({});

//     console.log("Check Check......")

//     async function getPost(){
//         const response = await fetch(url);
//         const data = await response.json();
//         setPost(data);
//     }

//     useEffect(() => {
//         getPost();
//     }, []);

//     return {
//         post
//     }

// }

//Beginner stuff (hardcoded url - it will be better if url comes from the user)
// export function useFetch(){
//     const [post, setPost] = useState({});

//     async function getPost(){
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json();
//         setPost(data);
//     }

//     useEffect(() => {
//         getPost();
//     }, [])

//     return {
//         post
//     }
// }