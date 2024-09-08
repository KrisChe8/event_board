import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import Mytickets_card from "./Mytickets_card";

function Participant_mytickets({ user }) {
  const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [asc, setAsc] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("my_tickets")
        .select()
        .eq("user_email", user)
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
      <h1 className="page-title">
        Events You're Attending: Get Ready to Join the Fun!
      </h1>
      <div className="screen-wrapper">
        {fetchError ? <p className="error-msg">{fetchError}</p> : null}
        {events ? (
          <>
            <p className="orderby-title">Order My Events By:</p>
            <div className="order-by">
              <button
                onClick={() => {
                  setOrderBy("created_at");
                  setAsc(false);
                }}
              >
                Last added
              </button>
              <button
                onClick={() => {
                  setOrderBy("date");
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
                <Mytickets_card key={event.id} event={event} user={user} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Participant_mytickets;
