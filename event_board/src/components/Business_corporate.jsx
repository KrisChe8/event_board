import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";

function Business_corporate() {
  const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [asc, setAsc] = useState(false);

  // GET CURRENT USER
  const active_user = "kris.dev.888@gmail.com";

  const handleDeleteUiExp = (id) => {
    setEvents((prev) => {
      return prev.filter((evnt) => evnt.id !== id);
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("corporate_events")
        .select()
        .order(orderBy, { ascending: asc });

      if (error) {
        setFetchError("There are no events yet!");
        setEvents(null);
        console.log(error);
      }
      if (data) {
        setEvents(data);
        setFetchError(null);
      }
    };
    fetchEvents();
  }, [orderBy]);
  return (
    <div className="screen-wrapper">
      {fetchError ? <p className="error-msg">{fetchError}</p> : null}
      {events ? (
        <>
          <p className="orderby-title">Order All Corporate Events By:</p>
          <div className="order-by">
            <button
              onClick={() => {
                setOrderBy("created_at");
                setAsc(false);
              }}
            >
              Time Created
            </button>
            <button
              onClick={() => {
                setOrderBy("event_start");
                setAsc(true);
              }}
            >
              Event Date
            </button>
            <button
              onClick={() => {
                setOrderBy("event_name");
                setAsc(true);
              }}
            >
              Event Name
            </button>
          </div>
          <div className="events-wrapper">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                user={active_user}
                onDelete={handleDeleteUiExp}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Business_corporate;
