import { Link } from "react-router-dom";
import { sendDatatodb } from "../../supabase_req";

function Event_corporate_card({ event, user }) {
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

  function createCalendarEvent() {
    const name = event.event_name;
    const description = event.event_description;
    const date = dateforDb;
    const time = timeL;
    const img = event.picture_url;

    sendDatatodb(user, name, description, date, time, img);
  }

  return (
    <>
      <div className="event-card-wrapper">
        <img
          className="card-img"
          src={event.picture_url}
          alt={event.event_name}
        />
        <Link className="card-title-link" to="#">
          <h3 className="card-title">{event.event_name}</h3>
        </Link>
        <div className="card-details">
          <p className="card-date">
            Date: {dmy} Time: {timeL}
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
