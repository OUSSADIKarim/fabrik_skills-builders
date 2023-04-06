import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import moment from "moment/moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"; // if using DnD
import "./calendarCourses.css";
const localizer = momentLocalizer(moment);

const handleSelector = (events, setCalendarEvents) => {
  const eventSelector = document.getElementById("eventSelector");
  const id = eventSelector?.value;
  const eventChoosed = events.filter((event) => {
    if (event.id === id) {
      return true;
    } else {
      return false;
    }
  });

  setCalendarEvents(eventChoosed);
};

const CalendarCourses = () => {
  const [events, setEvents] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const calendar = useRef(null);

  const { data, isLoading } = useQuery(["courses"], async () => {
    const res = await Axios.get("../../../data/courses.json");
    const data = res.data;
    return data;
  });

  useEffect(() => {
    if (data?.courses) {
      const newEvents = data.courses.reduce((acc, course) => {
        const event = {
          id: course._id,
          title: course.title,
          start: new Date(course.startRegistration),
          end: new Date(course.endRegistration),
        };
        return [...acc, event];
      }, []);
      setEvents(newEvents);
    }
  }, [data?.courses]);

  if (isLoading) {
    return <h2>Loadning....</h2>;
  }

  return (
    <section className="calendar">
      <h1>allahouma ini saem</h1>
      <select
        id="eventSelector"
        onChange={() => {
          handleSelector(events, setCalendarEvents);
        }}
      >
        {events.map((event) => {
          return <option value={event.id}>{event.title}</option>;
        })}
      </select>
      <Calendar
        ref={calendar}
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </section>
  );
};

export default CalendarCourses;
