import { Link } from "react-router-dom";

function Participant_navbar() {
  return (
    <nav className="navbar participant-navbar">
      <div className="logo">
        <img
          className="company-logo"
          src="/around-the-world.png"
          alt="Company logo"
        />
      </div>
      <div className="menu">
        <Link className="menu-item" to="/participant/home/external">
          {" "}
          Home Participant
        </Link>
        <Link className="menu-item" to="/participant/mytickets">
          {" "}
          My tickets
        </Link>
        <button className="sign-out">Sign out</button>
      </div>
      <div className="userlogged">Username</div>
    </nav>
  );
}

export default Participant_navbar;
