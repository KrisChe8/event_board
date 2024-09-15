import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

import { useNavigate } from "react-router-dom";

function Participant_navbar({ username }) {
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
    <nav className="navbar participant-navbar navmenu ">
      <div className="flex-wrap participant-flex-wrap">
        <div className="hamburger hamburger-participant">
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
          <ul className={`navmenu__list-participant ${activeDropdownmenu}`}>
            <li className="nav-item-participant" onClick={closeDropdown}>
              <Link
                className="menu-item-participant"
                to="/participant/home/external"
              >
                {" "}
                Browse All Events
              </Link>
            </li>

            <li className="nav-item-participant" onClick={closeDropdown}>
              <Link
                className="menu-item-participant"
                to="/participant/mytickets"
              >
                {" "}
                View My Tickets
              </Link>
            </li>
            <li className="nav-item-participant" onClick={closeDropdown}>
              <button
                onClick={() => signOut()}
                className="sign-out sign-out-participant"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="userlogged">{username}</div>
    </nav>
  );
}

export default Participant_navbar;
