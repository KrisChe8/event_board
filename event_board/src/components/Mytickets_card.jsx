function Mytickets_card({ event, user }) {
  return (
    <div className="event-card-wrapper">
      <img className="card-img" src={event.img_url} alt={event.event_name} />

      <h3 className="card-title">{event.event_name}</h3>
      <p className="description-card">{event.event_description}</p>
      <div className="card-details">
        <p className="card-date">Date: {event.date} </p>
        <p className="card-date">Time: {event.time}</p>
      </div>
      {/* {user === event.created_by ? (
        <div className="nav-buttons">
          <Link to={"/business/myevents/" + event.id}>
            <span className="material-symbols-outlined">edit</span>
          </Link>
          <span className="material-symbols-outlined" onClick={handleDelete}>
            delete
          </span>
        </div>
      ) : null} */}
    </div>
  );
}

export default Mytickets_card;
