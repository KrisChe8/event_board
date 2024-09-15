import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { sendDatatodb } from "../../supabase_req";

function Event_api_card({
  user,
  name,
  start,
  description,
  date,
  time,
  img,
  link,
  id,
  session,
  token,
}) {
  const [saveError, setSaveError] = useState(null);

  const startTimeArr = time.split(":");
  const startTime = `${startTimeArr[0]}:${startTimeArr[1]}`;
  // GET END TIME:
  let timeArr = time.split(":");
  let changedHour = parseInt(timeArr[0]) + 3;
  timeArr[0] = changedHour;
  let newTime = timeArr.join(":");
  let end = date + "T" + newTime + "Z";

  async function addToCalendarEvent() {
    //creating a body for POST request
    const event = {
      summary: name,
      description: description,
      start: {
        dateTime: start,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };
    // console.log(token);
    //changing instead of calendarId - write primary
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token, //Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        alert("Event created");
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong. Please try again!");
      });
  }

  function createCalendarEvent() {
    sendDatatodb(user, name, description, date, time, img);
    addToCalendarEvent();
  }

  return (
    <div className="api-card-wrapper business-api-card-wrapper">
      <img className="api-card-img" src={img} alt={name} />

      <h3 className="card-title">{name}</h3>

      <div className="line"></div>
      <div className="api-card-details business-api-card-details">
        <p className="card-date">
          <div className="icons-wrapper">
            <img
              className="icons-img business-icons-img"
              src="/number-1.png"
              alt="calendar"
            />
            Date: {date}{" "}
          </div>
        </p>
        <p className="card-date">
          <div className="icons-wrapper">
            <img
              className="icons-img business-icons-img"
              src="/clock.png"
              alt="time icon"
            />
            Time: {startTime}
          </div>
        </p>
      </div>
      <div className="icons-wrapper icons-wrapper-finger">
        <img
          className="icons-img-finger business-icons-img-finger"
          src="/finger.png"
          alt="pointer to the link"
        />{" "}
        <a className="event-link business-event-link" href={link}>
          Read more about the Event
        </a>
      </div>

      {user ? (
        <button
          onClick={() => createCalendarEvent()}
          className="addto-calendar-btn addto-calendar-btn-api business-addto-calendar-btn"
        >
          Add to my Calendar
        </button>
      ) : null}
    </div>
  );
}

export default Event_api_card;
