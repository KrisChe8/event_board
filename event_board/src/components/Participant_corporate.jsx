import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Event_corporate_card from "./Event_corporate_card_participant";

function Participant_corporate() {
  const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [asc, setAsc] = useState(false);

  // GET CURRENT USER
  const active_user = "kris.dev.888@gmail.com";

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
                Last Added
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
                <Event_corporate_card
                  key={event.id}
                  event={event}
                  user={active_user}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Participant_corporate;
