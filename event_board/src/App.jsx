import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Business_corporate from "./components/Business_corporate";
import Business_create from "./components/Business_create";
import Business_home from "./components/Business_home";
import Business_myevents from "./components/Business_myevents";
import Home from "./components/Home";
import Participant_corporate from "./components/Participant_corporate";
import Participant_home from "./components/Participant_home";
import Participant_mytickets from "./components/Participant_mytickets";

function App() {
  return (
    <>
      <h1>Event Board</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business/" element={<Business_home />} />
        <Route path="/business/corporate" element={<Business_corporate />} />
        <Route path="/business/create" element={<Business_create />} />
        <Route path="/business/myevents" element={<Business_myevents />} />

        <Route path="/participant/" element={<Participant_home />} />
        <Route
          path="/participant/corporate"
          element={<Participant_corporate />}
        />
        <Route
          path="/participant/mytickets"
          element={<Participant_mytickets />}
        />
      </Routes>
    </>
  );
}

export default App;
