import { Link } from "react-router-dom";
function Events_navbar() {
  return (
    <div className="events-switcher-wrapper">
      <Link to="/participant/home/external">External Events</Link>
      <Link to="/participant/home/corporate">Corporate Events</Link>
    </div>
  );
}

export default Events_navbar;
