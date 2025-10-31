import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import "./index.css";
import GetProfile from "./Components/GetProfile";
import Contact from "./Components/Contact";
import Home from "./Components/Home";


function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}> 
        <Route path="/" element={<Home/>}/>
        <Route path="/getprofile" element={<GetProfile/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
