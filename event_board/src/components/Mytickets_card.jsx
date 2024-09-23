import { useState } from "react";

function Mytickets_card({ event, user }) {
  const [showModal, setShowModal] = useState(false);

  const date = event.date.split("-");
  const dmy = date.reverse().join("-");
  const timeArr = event.time.split(":");
  const time = `${timeArr[0]}:${timeArr[1]}`;

  return (
    <>
      {showModal ? (
        <>
          <div className="modal-window">
            <div className="modal-card-wrapper">
              <div className="modal-img-wrapper">
                <img
                  className="modal-card-img"
                  src={event.img_url}
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

              <p className="modal-description">{event.event_description}</p>
            </div>
          </div>
        </>
      ) : null}
      <div className="event-card-wrapper event-card-wrapper-mytickets">
        <img
          className="my-tickets-card-img"
          src={event.img_url}
          alt={event.event_name}
        />
        <h3 className="mytickets-card-title" onClick={() => setShowModal(true)}>
          {event.event_name}
        </h3>
        <p className="description-card description-card-mytickets">
          {event.event_description}
        </p>
        <div className="card-details">
          <p className="card-date">Date: {dmy} </p>
          <p className="card-date">Time: {time}</p>
        </div>
      </div>
    </>
  );
}

export default Mytickets_card;
