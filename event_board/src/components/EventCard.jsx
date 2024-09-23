import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { useState } from "react";

function EventCard({ event, user, onDelete }) {
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
  const timeLine = timearr[0].split(":");
  const time = `${timeLine[0]}:${timeLine[1]}`;

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("corporate_events")
      .delete()
      .eq("id", event.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      onDelete(event.id);
    }
  };

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
                    <span className="modal-bold">Time:</span> {time}{" "}
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
      <div className="event-card-wrapper buscorp-event-card-wrapper">
        <div className="description-wrapper buscorp-description-wrapper">
          <img
            className="card-img buscorp-card-img"
            src={event.picture_url}
            alt={event.event_name}
          />
          <p className="description-text">{event.event_description}</p>
        </div>

        <h3 className="card-title-black" onClick={() => setShowModal(true)}>
          {event.event_name}
        </h3>
        <p
          className="description-text-small-screen"
          id="bc-description-text-small-screen"
        >
          {event.event_description}
        </p>
        <div className="card-details bc-card-details">
          <p className="card-date">
            <span className="bold-txt"> Date: </span> {dmy}{" "}
            <span className="bold-txt"> Time: </span> {time}
          </p>
          <p className="card-price">Price: {price}</p>
        </div>
        {user === event.created_by ? (
          <div className="nav-buttons bc-nav-btn">
            <Link to={"/business/myevents/" + event.id}>
              <span className="material-symbols-outlined">edit</span>
            </Link>
            <span className="material-symbols-outlined" onClick={handleDelete}>
              delete
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default EventCard;
