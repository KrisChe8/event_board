import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Business_api_events from "./Business_api_events";
import Business_corporate from "./Business_corporate";
import Business_create from "./Business_create";
import Business_myevents from "./Business_myevents";
import Business_navbar from "./Business_navbar";
import Error_page from "./Error";
import Update_event from "./Update_event";

function Business_home({ username, useremail }) {
  const size_show = 16;
  // GET CURRENT USER
  const active_user = useremail;
  return (
    <>
      <Business_navbar username={username} />
      <div className="screen-wrapper">
        <h1 className="app-title " id="app-title-business">
          From Sharing to Participating - The Event Journey Begins Here!
        </h1>

        <Routes>
          <Route
            path="/"
            element={
              <Business_api_events size={size_show} useremail={useremail} />
            }
          />
          <Route
            path="/corporate"
            element={<Business_corporate useremail={useremail} />}
          />
          <Route
            path="/create"
            element={<Business_create useremail={useremail} />}
          />
          <Route
            path="/myevents"
            element={<Business_myevents user={active_user} />}
          />
          <Route
            path="/myevents/:id"
            element={<Update_event useremail={useremail} />}
          />
          <Route path="*" element={<Error_page />} />
        </Routes>
      </div>
    </>
  );
}

export default Business_home;
