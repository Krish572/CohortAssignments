import { useEffect, useState } from "react"


function App() {

  const [postData, setPostData] = useState([{
        name: "harkirat",
        subtitle: "10000 followers",
        time: "2m ago",
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description: "What to know how to win big? Check out how these folks won $6000 in bounties."
      }]);

  function addPosts(){
    // setPostData((prev) => [
    //   ...prev, {
    //     name: "harkirat",
    //     subtitle: "10000 followers",
    //     time: "2m ago",
    //     image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
    //     description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    //   }
    // ])
    setPostData([...postData, {
      name: "harkirat",
      subtitle: "10000 followers",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <>
      <Topbar/>
      {/* <Notbar/>
      <Notbar/>
      <Notbar/> */}
      <button onClick={addPosts}>Add Posts</button>
      <div style={{display: "flex",flexDirection: "column", gap: 20 , justifyContent:"center", alignItems: "center"}}>
        {
          postData.map((data, index)=> (
              <PostComponent 
              key={index}
              name={data.name}
              subtitle={data.subtitle}
              time={data.time}
              image={data.image}
              description={data.description}
            />  
            
          ))
        }
      </div>
    </>
  )
}

function PostComponent(props){
  return(
    <div style={{display: "flex", gap: 10, flexDirection: "column" , width: 400, padding: 20, backgroundColor:"#dfe6e9", borderRadius: 5}}>
      <div style={{display: "flex", gap: 10}}>
        <img style={{width: 50, height: 50, borderRadius:25}} src={props.image}/>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span>{props.name}</span>
          <span>{props.subtitle}</span>
          {props.time && <span>{props.time} ::::</span>}
        </div>
      </div>
      <div>
        {props.description}
      </div>
    </div>
  )
}

function Topbar(){
  const [currentTab, setCurrentTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
    .then(async(res) => {
      const info = await res.json();
      setData(info);
      setLoading(false);
    })
  }, [currentTab])

  return (
    <>
      <button onClick={() => setCurrentTab("1")} style={{color: currentTab === "1" ? "red" : "black"}}>todo1</button>
      <button onClick={() => setCurrentTab("2")} style={{color: currentTab === "2" ? "red" : "black"}}>todo2</button>
      <button onClick={() => setCurrentTab("3")} style={{color: currentTab === "3" ? "red" : "black"}}>todo3</button>
      <button onClick={() => setCurrentTab("4")} style={{color: currentTab === "4" ? "red" : "black"}}>todo4</button>
      <div>{
          loading ? "...loading" : data.title
        }
      </div>
    </>
  )
}


function Notbar(){
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>increase</button>
    </>
  )
}

export default App
