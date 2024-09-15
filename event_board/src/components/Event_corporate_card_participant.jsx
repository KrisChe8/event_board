import { Link } from "react-router-dom";
import { sendDatatodb } from "../../supabase_req";
import { useState } from "react";

function Event_corporate_card({ event, user, session, token }) {
  const [showModal, setShowModal] = useState(false);

  let price;
  if (event.price === 0) {
    price = "Free";
  } else {
    price = "£ " + event.price;
  }

  const arr_date = event.event_start.split("T");
  const date = arr_date[0].split("-");

  const dmy = date.reverse().join("-");
  const timearr = arr_date[1].split("+");
  const timeL = timearr[0];

  const dateforDb = arr_date[0];

  const event_name = event.event_name;
  const description = event.event_description;
  const start_date = event.event_start;
  const end_date = event.event_end;

  async function addToCalendarEvent() {
    //creating a body for POST request
    const event = {
      summary: event_name,
      description: description,
      start: {
        dateTime: start_date,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end_date,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

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
    const name = event.event_name;
    const description = event.event_description;
    const date = dateforDb;
    const time = timeL;
    const img = event.picture_url;

    sendDatatodb(user, name, description, date, time, img);
    addToCalendarEvent();
  }
  // event.event_start event.event_end
  // console.log(event);
  return (
    <>
      {showModal ? (
        <>
          <div className="modal-window">
            <div className="modal-card-wrapper">
              <div className="modal-img-wrapper">
                <img
                  className="modal-card-img"
                  src={event.picture_url}
                  alt={event.event_name}
                />
                <button
                  onClick={() => setShowModal(false)}
                  className="modal-close"
                >
                  X
                </button>
              </div>
              <h3 className="modal-card-title">{event.event_name}</h3>
              <div className="modal-time-details">
                <div className="modal-icons-wrapper">
                  <img
                    className="modal-icons-img"
                    src="/number-1.png"
                    alt="calendar"
                  />
                  <p>
                    {" "}
                    <span className="modal-bold">Date:</span> {dmy}{" "}
                  </p>
                </div>
                <div className="modal-icons-wrapper">
                  {" "}
                  <img
                    className="modal-icons-img"
                    src="/clock.png"
                    alt="time icon"
                  />
                  <p>
                    {" "}
                    <span className="modal-bold">Time:</span> {timeL}{" "}
                  </p>
                </div>
              </div>
              <div className="modal-other-details">
                <div className="modal-icons-wrapper">
                  <img
                    className="modal-icons-img"
                    src="/employee.png"
                    alt="time icon"
                  />
                  <p className="modal-speakers">
                    <span className="modal-bold">Speakers: </span>
                    {event.speakers}
                  </p>
                </div>
                <div className="modal-icons-wrapper">
                  <img
                    className="modal-icons-img"
                    src="/best-price.png"
                    alt="time icon"
                  />
                  <p className="modal-price">
                    <span className="modal-bold">Price:</span> {price}
                  </p>
                </div>
              </div>
              <p className="modal-description">{event.event_description}</p>
              <button
                onClick={() => createCalendarEvent()}
                className="modal-addto-calendar-btn"
              >
                Add to my Calendar
              </button>
            </div>
          </div>
        </>
      ) : null}

      <div className="event-card-wrapper">
        <div className="description-wrapper">
          <img
            className="card-img"
            src={event.picture_url}
            alt={event.event_name}
          />
          <p className="description-text">{event.event_description}</p>
        </div>

        <h3 className="card-title-black" onClick={() => setShowModal(true)}>
          {event.event_name}
        </h3>
        <p className="description-text-small-screen">
          {event.event_description}
        </p>
        <div className="card-details">
          <p className="card-date">
            {" "}
            <div className="icons-wrapper">
              <img className="icons-img" src="/number-1.png" alt="calendar" />
              Date: {dmy}{" "}
            </div>
            <div className="icons-wrapper">
              {" "}
              <img className="icons-img" src="/clock.png" alt="time icon" />
              Time: {timeL}{" "}
            </div>
          </p>
          <p className="card-price">Price: {price}</p>
        </div>
        <button
          onClick={() => createCalendarEvent()}
          className="addto-calendar-btn"
        >
          Add to my Calendar
        </button>
      </div>
    </>
  );
}

export default Event_corporate_card;
