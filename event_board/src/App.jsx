import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Business_corporate from "./components/Business_corporate";
import Business_create from "./components/Business_create";
import Business_home from "./components/Business_home";
import Business_myevents from "./components/Business_myevents";
import Error_page from "./components/Error";
import Home from "./components/Home";
import Participant_corporate from "./components/Participant_corporate";
import Participant_home from "./components/Participant_home";
import Participant_mytickets from "./components/Participant_mytickets";
import Update_event from "./components/Update_event";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business/*" element={<Business_home />} />
        {/* <Route path="/business/corporate" element={<Business_corporate />} />
        <Route path="/business/create" element={<Business_create />} />
        <Route path="/business/myevents" element={<Business_myevents />} />
        <Route path="/business/myevents/:id" element={<Update_event />} /> */}

        <Route path="/participant/*" element={<Participant_home />} />
        {/* <Route
          path="/participant/corporate"
          element={<Participant_corporate />}
        />
        <Route
          path="/participant/mytickets"
          element={<Participant_mytickets />}
        /> */}
        <Route path="/notfound" element={<Error_page />} />
      </Routes>
    </>
  );
}

export default App;
