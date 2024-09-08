import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Events_navbar from "./Events_navbar";
import Participant_corporate from "./Participant_corporate";
import Participant_events_manager from "./Participant_events_manager";
import Participant_mytickets from "./Participant_mytickets";
import Participant_navbar from "./Participant_navbar";

function Participant_home() {
  // GET FROM LOGED IN
  const active_user = "kris.dev.888@gmail.com";
  return (
    <div className="screen-wrapper">
      <Participant_navbar />
      <h1 className="app-title">
        From Sharing to Participating - The Event Journey Begins Here!
      </h1>

      <Routes>
        <Route path="/home/*" element={<Participant_events_manager />} />
        <Route
          path="/mytickets"
          element={<Participant_mytickets user={active_user} />}
        />
      </Routes>
    </div>
  );
}

export default Participant_home;
