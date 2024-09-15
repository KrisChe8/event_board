import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Event_corporate_card from "./Event_corporate_card_participant";

function Participant_corporate({ useremail, session, token }) {
  const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [asc, setAsc] = useState(false);
  const [showOrderBy, setShowOrderBy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // GET CURRENT USER
  const active_user = useremail;

  useEffect(() => {
    setIsLoading(true);
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("corporate_events")
        .select()
        .order(orderBy, { ascending: asc });

      if (error) {
        setIsLoading(false);
        setFetchError("There are no events yet!");
        setEvents(null);
        console.log(error);
      }
      if (data) {
        setIsLoading(false);
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
            <p className="orderby-title">
              Order All Corporate Events By:{" "}
              <span
                onClick={() => setShowOrderBy((prev) => !prev)}
                class="material-symbols-outlined ms-icon"
              >
                {showOrderBy ? "arrow_drop_up" : "arrow_drop_down"}
              </span>
            </p>
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
            {showOrderBy ? (
              <>
                <div className="order-by-small-screen">
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
              </>
            ) : null}

            <div className="events-wrapper">
              {isLoading ? <p className="isLoading">Loading...</p> : null}
              {events.map((event) => (
                <Event_corporate_card
                  key={event.id}
                  event={event}
                  user={active_user}
                  session={session}
                  token={token}
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
