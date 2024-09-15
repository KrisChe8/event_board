import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

import { useNavigate } from "react-router-dom";

function Business_navbar({ username }) {
  const navigate = useNavigate();
  const [activeClass, setActiveClass] = useState(null);
  const [activeDropdownmenu, setActiveDropdownmenu] = useState(null);

  async function signOut() {
    await supabase.auth.signOut();
    navigate("/");
  }

  const handleBurger = (e) => {
    e.preventDefault();
    if (activeClass) {
      setActiveClass(null);
      setActiveDropdownmenu(null);
    } else {
      setActiveClass("menu-btn_active");
      setActiveDropdownmenu("navmenu__list-active");
    }
  };
  const closeDropdown = (e) => {
    e.preventDefault();
    setActiveDropdownmenu(null);
    setActiveClass(null);
  };

  return (
    <nav className="navbar business-navbar navmenu">
      <div className="flex-wrap">
        <div className="hamburger">
          <div className={`menu-btn ${activeClass}`} onClick={handleBurger}>
            <span className="bar"></span>
          </div>
        </div>
        <div className="logo">
          <img
            className="company-logo"
            src="/around-the-world.png"
            alt="Company logo"
          />
        </div>
        <div className="menu">
          <ul className={`navmenu__list ${activeDropdownmenu}`}>
            <li className="nav-item" onClick={closeDropdown}>
              <Link className="menu-item" to="/business">
                {" "}
                External Events
              </Link>
            </li>
            <li className="nav-item" onClick={closeDropdown}>
              <Link className="menu-item" to="/business/corporate">
                {" "}
                In-House Events
              </Link>
            </li>

            <li className="nav-item" onClick={closeDropdown}>
              <Link className="menu-item" to="/business/create">
                {" "}
                Create a New Event
              </Link>
            </li>
            <li className="nav-item" onClick={closeDropdown}>
              <Link className="menu-item" to="/business/myevents">
                {" "}
                Browse My Events
              </Link>
            </li>
            <li className="nav-item" onClick={closeDropdown}>
              <button onClick={() => signOut()} className="sign-out">
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="userlogged">{username}</div>
    </nav>
  );
}

export default Business_navbar;
