import { useState } from "react";
import { useFetch } from "./useFetch"


function App() {

  const [currentPost, setCurrentPost] = useState(1);

  const url = "https://jsonplaceholder.typicode.com/posts/"

  const {post} = useFetch(url + currentPost);

  return (
    <>
      {JSON.stringify(post)}
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
    </>
  )
}

export default App
