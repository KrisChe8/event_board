import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Participant_corporate from "./Participant_corporate";
import Participant_mytickets from "./Participant_mytickets";

function Participant_home() {
  return (
    <div className="screen-wrapper">
      <h1>Participant Home</h1>
      <Link to="/participant"> Home Participant</Link>
      <Link to="/participant/corporate"> Participant Corporate</Link>
      <Link to="/participant/mytickets"> Participant My Tickets</Link>

      {/* <Routes>
        <Route
          path="/participant/corporate"
          element={<Participant_corporate />}
        />
        <Route
          path="/participant/mytickets"
          element={<Participant_mytickets />}
        />
      </Routes> */}
    </div>
  );
}

export default Participant_home;
