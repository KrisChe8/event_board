import { Link } from "react-router-dom";

function Business_navbar() {
  return (
    <nav className="navbar business-navbar">
      <div className="logo">
        <img
          className="company-logo"
          src="/around-the-world.png"
          alt="Company logo"
        />
      </div>
      <div className="menu">
        <Link className="menu-item" to="/business">
          {" "}
          Home Business
        </Link>
        <Link className="menu-item" to="/business/corporate">
          {" "}
          Business Corporate
        </Link>
        <Link className="menu-item" to="/business/create">
          {" "}
          Business Create
        </Link>
        <Link className="menu-item" to="/business/myevents">
          {" "}
          Business My Events
        </Link>
        <button className="sign-out">Sign out</button>
      </div>
      <div className="userlogged">Username</div>
    </nav>
  );
}

export default Business_navbar;
