import { useEffect, useState } from "react";
import { fetchAllApiEvents } from "../../api";
import Event_api_card from "./Event_api_card";

function Business_api_events({ size }) {
  const [eventList, setEventList] = useState([]);

  const sizeShow = size;

  //   GET USER FROM LOGIN SESSION
  const user = "kris.dev.888@gmail.com";

  useEffect(() => {
    fetchAllApiEvents({ sizeShow })
      .then((response) => {
        setEventList(response._embedded.events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>API EVENTS</h1>
      <div className="events-api-wrapper">
        {eventList.map((el) => {
          return (
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
            />
          );
        })}
      </div>
    </>
  );
}

export default Business_api_events;
