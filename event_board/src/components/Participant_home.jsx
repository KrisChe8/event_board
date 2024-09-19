import { Routes, Route } from "react-router-dom";

import Error_page from "./Error";

import Participant_events_manager from "./Participant_events_manager";
import Participant_mytickets from "./Participant_mytickets";
import Participant_navbar from "./Participant_navbar";
import Success from "./Success";

function Participant_home({ username, useremail, session, token }) {
  // GET FROM LOGED IN
  const active_user = useremail;
  return (
    <div className="screen-wrapper">
      <Participant_navbar username={username} />
      <h1 className="app-title">
        From Sharing to Participating - The Event Journey Begins Here!
      </h1>

      <Routes>
        <Route
          path="/home/*"
          element={
            <Participant_events_manager
              useremail={useremail}
              session={session}
              token={token}
            />
          }
        />
        <Route
          path="/mytickets"
          element={<Participant_mytickets user={active_user} />}
        />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error_page />} />
      </Routes>
    </div>
  );
}

export default Participant_home;
