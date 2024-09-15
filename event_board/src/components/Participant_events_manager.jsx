import Events_navbar from "./Events_navbar";
import { Routes, Route } from "react-router-dom";
import Participant_corporate from "./Participant_corporate";
import External_events from "./Participant_external_events";
import Error_page from "./Error";

function Participant_events_manager({ useremail, session, token }) {
  return (
    <>
      <Events_navbar />

      <Routes>
        <Route
          path="/corporate"
          element={
            <Participant_corporate
              useremail={useremail}
              session={session}
              token={token}
            />
          }
        />
        <Route
          path="/external"
          element={
            <External_events
              useremail={useremail}
              session={session}
              token={token}
            />
          }
        />
        <Route path="*" element={<Error_page />} />
      </Routes>
    </>
  );
}

export default Participant_events_manager;
