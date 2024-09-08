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
}) {
  const [saveError, setSaveError] = useState(null);

  //   const sendDatatodb = async () => {
  //     if (!user || !name) {
  //       console.log("no user or event name");
  //       return;
  //     }
  //     const { data, error } = await supabase
  //       .from("my_tickets")
  //       .insert([
  //         {
  //           user_email: user,
  //           event_name: name,
  //           event_description: description,
  //           date: date,
  //           time: time,
  //           img_url: img,
  //         },
  //       ])
  //       .select();
  //     if (error) {
  //       console.log(error);
  //       setSaveError("Something went wrong. Try again!");
  //       alert("Something went wrong. Try again!");
  //     }
  //     if (data) {
  //       setSaveError(null);
  //       console.log(data);
  //     }
  //   };

  function createCalendarEvent() {
    sendDatatodb(user, name, description, date, time, img);
  }

  return (
    <div className="api-card-wrapper">
      <img className="api-card-img" src={img} alt={name} />
      <Link className="card-title-link" to="#">
        <h3 className="card-title">{name}</h3>
      </Link>
      <div className="api-card-details">
        <p className="card-date">Date: {date}</p>
        <p className="card-date">Time: {time}</p>
      </div>
      <a className="event-link" href={link}>
        Read more about the Event
      </a>
      <button
        onClick={() => createCalendarEvent()}
        className="addto-calendar-btn"
      >
        Add to my Calendar
      </button>
    </div>
  );
}

export default Event_api_card;
