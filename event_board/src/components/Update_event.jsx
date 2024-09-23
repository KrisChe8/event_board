import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function Update_event({ useremail }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStart, setEventStart] = useState(dayjs(new Date()));
  const [eventEnd, setEventEnd] = useState(dayjs(new Date()));
  const [eventPrice, setEventPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [formError, setFormError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // TO BE CHANGED FOR LOGIN DETAILS
  const createdBy = useremail;

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (typeof eventPrice != "number" || eventPrice < 0) {
      setEventPrice(0);
    }

    if (
      !eventName ||
      !eventDescription ||
      !eventStart ||
      !eventEnd ||
      //   !eventPrice ||
      !createdBy ||
      !speakers
    ) {
      setFormError("Please fill in all the fields correctly!");
      return;
    }

    if (!imgUrl) {
      setImgUrl(
        "https://images.spiceworks.com/wp-content/uploads/2023/09/05181029/top-10-tech-events-in-September-2023.jpg"
      );
    }

    const start = eventStart.format();
    const end = eventEnd.format();

    const { data, error } = await supabase
      .from("corporate_events")
      .update({
        created_by: createdBy,
        event_name: eventName,
        event_description: eventDescription,
        event_start: start,
        event_end: end,
        price: eventPrice,
        picture_url: imgUrl,
        speakers: speakers,
      })
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
      setFormError("Oops");
    }
    if (data) {
      setFormError(null);

      navigate("/business/corporate");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchEvent = async () => {
      const { data, error } = await supabase
        .from("corporate_events")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/notfound", { replace: true });
        setIsLoading(false);
      }
      if (data) {
        setIsLoading(false);
        const num_price = parseInt(data.price);

        setEventName(data.event_name);
        setEventDescription(data.event_description);
        setEventStart(dayjs(data.event_start));
        setEventEnd(dayjs(data.event_end));
        setEventPrice(num_price);
        setImgUrl(data.picture_url);
        setSpeakers(data.speakers);
      }
    };
    fetchEvent();
  }, [id, navigate]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="screen-wrapper">
          {isLoading ? <p className="isLoading">Loading...</p> : null}
          <div className="form-wrapper">
            <h2 className="form-title">Edit your Event</h2>
            <form className="form" onSubmit={handleUpdate}>
              <label className="form-label" htmlFor="title">
                Title of your Event:
              </label>
              <input
                className="form-input"
                type="text"
                id="title"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
              <label className="form-label" htmlFor="description">
                Description:
              </label>
              <textarea
                className="form-input"
                name="description"
                id="description"
                cols="30"
                rows="5"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              ></textarea>

              <p className="form-label">Start of Your Event:</p>
              <DateTimePicker
                className="date_style"
                onChange={(newVal) => setEventStart(newVal)}
                value={eventStart}
              />
              <p className="form-label">End of Your Event:</p>
              <DateTimePicker
                className="date_style"
                renderNumbers="true"
                onChange={(newVal) => setEventEnd(newVal)}
                value={eventEnd}
              />
              <label className="form-label" htmlFor="speaker">
                Speakers:
              </label>
              <input
                className="form-input"
                type="text"
                id="speaker"
                value={speakers}
                onChange={(e) => setSpeakers(e.target.value)}
              />
              <label className="form-label" htmlFor="price">
                Price:
              </label>
              <input
                className="form-input"
                type="number"
                id="price"
                value={eventPrice}
                onChange={(e) => setEventPrice(e.target.value)}
              />
              <label className="form-label" htmlFor="image">
                Image URL:
              </label>
              <input
                className="form-input"
                type="text"
                name="image"
                id="image"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />

              <button className="form-btn">Update the Event</button>
              {formError ? <p className="error-msg">{formError}</p> : null}
            </form>
          </div>
        </div>
      </LocalizationProvider>
    </>
  );
}

export default Update_event;
