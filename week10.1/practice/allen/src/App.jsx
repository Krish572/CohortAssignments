import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={(<div>Home Page</div>)}/>
            <Route path="/classroom-courses" element={(<div>This is classroom-courses page</div>)}/>
            <Route path="/online-courses" element={(<div>This is online courses page</div>)}/>
            <Route path="/test-series" element={(<div>This is test series page</div>)}/>
            <Route path="/results" element={(<div>This is Results page</div>)}/>
            <Route path="/study-materials" element={(<div>This is Study Materials Page</div>)}/>
            <Route path="/scholorships" element={(<div>This is scholorships page</div>)}/>
            <Route path="/allen-store" element={(<div>This is allen-store page</div>)}/>
            <Route path="/more" element={(<div>This is MOre page</div>)}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
