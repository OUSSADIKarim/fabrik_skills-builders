import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Events from "./pages/events/Events"

import {Routes, Route } from "react-router-dom"

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Courses />
      </QueryClientProvider>
    </div>
  );
  return (
      <>
        <QueryClientProvider client={client}>
        
      
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/events/:id" element={<Events/>} />
          </Routes>
        <Footer/>
        </QueryClientProvider>
      </>
  )
}

export default App;
