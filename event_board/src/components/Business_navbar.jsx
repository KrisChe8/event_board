import { Link } from "react-router-dom";

function Business_navbar() {
  return (
    <nav className="navbar business-navbar">
      <div className="logo">
        <h2>LOGO</h2>
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
      </div>
      <div className="userlogged">Username</div>
    </nav>
  );
}

export default Business_navbar;
