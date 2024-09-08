import Events_navbar from "./Events_navbar";
import { Routes, Route } from "react-router-dom";
import Participant_corporate from "./Participant_corporate";
import External_events from "./Participant_external_events";

function Participant_events_manager() {
  return (
    <>
      <Events_navbar />

      <Routes>
        <Route path="/corporate" element={<Participant_corporate />} />
        <Route path="/external" element={<External_events />} />
      </Routes>
    </>
  );
}

export default Participant_events_manager;
