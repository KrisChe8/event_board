import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Business_corporate from "./Business_corporate";
import Business_create from "./Business_create";
import Business_myevents from "./Business_myevents";

function Business_home() {
  return (
    <div className="screen-wrapper">
      <h1>Business Home</h1>
      <Link to="/business"> Home Business</Link>
      <Link to="/business/corporate"> Business Corporate</Link>
      <Link to="/business/create"> Business Create</Link>
      <Link to="/business/myevents"> Business My Events</Link>

      {/* <Routes>
        <Route path="/business/corporate" element={<Business_corporate />} />
        <Route path="/business/create" element={<Business_create />} />
        <Route path="/business/myevents" element={<Business_myevents />} />
      </Routes> */}
    </div>
  );
}

export default Business_home;
