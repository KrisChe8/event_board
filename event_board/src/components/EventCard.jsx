import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

function EventCard({ event, user, onDelete }) {
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
  const time = timearr[0];

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
      console.log(data);
      onDelete(event.id);
    }
  };

  return (
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
          Date: {dmy} Time: {time}
        </p>
        <p className="card-price">Price: {price}</p>
      </div>
      {user === event.created_by ? (
        <div className="nav-buttons">
          <Link to={"/business/myevents/" + event.id}>
            <span className="material-symbols-outlined">edit</span>
          </Link>
          <span className="material-symbols-outlined" onClick={handleDelete}>
            delete
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default EventCard;
