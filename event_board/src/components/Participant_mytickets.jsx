import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import Mytickets_card from "./Mytickets_card";

function Participant_mytickets({ user }) {
  const [fetchError, setFetchError] = useState(null);
  const [fetchPastEventsError, setFetchPastEventsError] = useState(null);
  const [events, setEvents] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [asc, setAsc] = useState(false);
  const date = new Date().toISOString();
  const today = date.split("T")[0];

  const [pastEvents, setPastEvents] = useState(null);
  const [displayOld, setDisplayOld] = useState(false);
  const [showOrderBy, setShowOrderBy] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchPastEvents = async () => {
      const { data, error } = await supabase
        .from("my_tickets")
        .select()
        .eq("user_email", user)
        .lt("date", today);

      if (error) {
        setIsLoading(false);
        setFetchPastEventsError("You have not attended any event yet!");
        setPastEvents(null);
        console.log(error);
      }
      if (data) {
        setIsLoading(false);
        setPastEvents(data);
        setFetchPastEventsError(null);
      }
    };

    const fetchEvents = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("my_tickets")
        .select()
        .eq("user_email", user)
        .gte("date", today)
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
    fetchPastEvents();
  }, [orderBy]);

  return (
    <div className="screen-wrapper">
      <h1 className="page-title" id="page-title-mytickets">
        Your Upcoming Events: Get Ready to Join the Fun!
      </h1>
      <div className="screen-wrapper">
        {fetchError ? <p className="error-msg">{fetchError}</p> : null}
        {events ? (
          <>
            <p className="orderby-title orderby-title-mytickets ">
              Order My Events By:
              <span
                onClick={() => setShowOrderBy((prev) => !prev)}
                class="material-symbols-outlined ms-icon"
              >
                {showOrderBy ? "arrow_drop_up" : "arrow_drop_down"}
              </span>
            </p>
            <div className="navigation-wrapper navigation-wrapper-mytickets">
              <div className="order-by order-by-mytickets">
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

              <div className="toggle-wrapper">
                <button onClick={() => setDisplayOld((prev) => !prev)}>
                  {displayOld ? "Hide Old Events" : "Show Attended Events"}
                </button>
              </div>
            </div>

            {displayOld ? (
              <>
                {fetchPastEventsError ? (
                  <p className="error-msg">{fetchPastEventsError}</p>
                ) : null}
                <div className="events-wrapper past-events-wrapper">
                  {pastEvents.map((event) => (
                    <Mytickets_card key={event.id} event={event} user={user} />
                  ))}
                </div>
              </>
            ) : (
              <></>
            )}
            {isLoading ? <p className="isLoading">Loading...</p> : null}
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
