import { useEffect, useState } from "react";
import { fetchAllApiEvents } from "../../api";
import Event_api_card from "./Event_api_card";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

function Business_api_events({ size, useremail, session, token }) {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const sizeShow = size;

  //   GET USER FROM LOGIN SESSION
  const user = useremail;

  useEffect(() => {
    setIsLoading(true);
    fetchAllApiEvents({ sizeShow })
      .then((response) => {
        setIsLoading(false);
        setEventList(response._embedded.events);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="events-api-wrapper business-events-api-wrapper">
        {eventList.map((el) => {
          return (
            <>
              {isLoading ? <p className="isLoading">Loading...</p> : null}

              <Event_api_card
                key={el.id}
                user={user}
                name={el.name}
                start={el.dates["start"]["dateTime"]}
                description={el.classifications[0].genre.name}
                date={el.dates["start"]["localDate"]}
                time={el.dates["start"]["localTime"]}
                img={el.images[0]["url"]}
                link={el.url}
                id={el.id}
                session={session}
                token={token}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Business_api_events;
