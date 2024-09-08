import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Business_api_events from "./Business_api_events";
import Business_corporate from "./Business_corporate";
import Business_create from "./Business_create";
import Business_myevents from "./Business_myevents";
import Business_navbar from "./Business_navbar";
import Update_event from "./Update_event";

function Business_home() {
  const size_show = 16;
  // GET CURRENT USER
  const active_user = "kris.dev.888@gmail.com";
  return (
    <>
      <Business_navbar />
      <div className="screen-wrapper">
        <h1 className="app-title">
          From Sharing to Participating - The Event Journey Begins Here!
        </h1>
        {/* <Link to="/business"> Home Business</Link>
        <Link to="/business/corporate"> Business Corporate</Link>
        <Link to="/business/create"> Business Create</Link>
        <Link to="/business/myevents"> Business My Events</Link> */}
        {/* <Link to="/business/myevents/:id"> Update My Events</Link> */}

        <Routes>
          <Route path="/" element={<Business_api_events size={size_show} />} />
          <Route path="/corporate" element={<Business_corporate />} />
          <Route path="/create" element={<Business_create />} />
          <Route
            path="/myevents"
            element={<Business_myevents user={active_user} />}
          />
          <Route path="/myevents/:id" element={<Update_event />} />
        </Routes>
      </div>
    </>
  );
}

export default Business_home;
