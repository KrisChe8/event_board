import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import supabase from "./config/supabaseClient";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </BrowserRouter>
);
