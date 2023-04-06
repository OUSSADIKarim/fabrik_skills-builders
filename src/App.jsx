import "./App.css";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Events from "./pages/events/Events"

import {Routes, Route } from "react-router-dom"

function App() {
  return (
      <>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/events/:id" element={<Events/>} />
          </Routes>
        <Footer/>
      </>
  )
}

export default App;
