import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Courses from "./pages/courses/Courses";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Events from "./pages/events/Events"
import Jobs from "./pages/jobs/Jobs"

import {Routes, Route } from "react-router-dom"
import CalendarCourses from "./pages/calendar/CalendarCourses";

function App() {
  const client = new QueryClient();
  return (
      <>
        <QueryClientProvider client={client}>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/courses" element={<Courses/>} />
              <Route path="/calendar" element={<CalendarCourses/>} />
              <Route path="/jobs" element={<Jobs/>} />
          </Routes>
        <Footer/>
        </QueryClientProvider>
      </>
  )
}

export default App;
