import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";

function Business_corporate({ useremail }) {
  const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [asc, setAsc] = useState(false);
  const [showOrderBy, setShowOrderBy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // GET CURRENT USER
  const active_user = useremail;

  const handleDeleteUiExp = (id) => {
    setEvents((prev) => {
      return prev.filter((evnt) => evnt.id !== id);
    });
  };

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
      {fetchError ? <p className="error-msg">{fetchError}</p> : null}
      {events ? (
        <>
          <p className="orderby-title">
            Order All Corporate Events By:
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
          {showOrderBy ? (
            <>
              <div className="order-by-small-screen">
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
            </>
          ) : null}
          {isLoading ? <p className="isLoading">Loading...</p> : null}
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
