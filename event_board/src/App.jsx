import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import Business_home from "./components/Business_home";

import Error_page from "./components/Error";
import Home from "./components/Home";

import Participant_home from "./components/Participant_home";
import supabase from "./config/supabaseClient";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { useEffect } from "react";

function App() {
  const session = useSession(); //tokens of user, when session exists we have a user
  // to prevent flickering when we reload:
  const { isLoading } = useSessionContext();
  const navigate = useNavigate();

  const [navLink, setNavLink] = useState("/");

  // if (isLoading) {
  //   return <></>;
  // }
  async function googleSignIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
        redirectTo:
          "https://event-board-psi.vercel.app/participant/home/corporate",
      },
    });

    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function googleSignInBusiness() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
        redirectTo: "https://event-board-psi.vercel.app/business/",
      },
    });

    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  useEffect(() => {
    // supabase.auth.onAuthStateChange((event, session) => {
    //   console.log(session);
    //   if (event == "INITIAL_SESSION") {
    //     navigate(navLink);
    //   }
    // });
  }, [session]);

  console.log(session);

  async function signOut() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <>
      <Routes>
        {session ? (
          <>
            <Route
              path="/business/*"
              element={
                <Business_home
                  username={session.user.user_metadata.name}
                  useremail={session.user.user_metadata.email}
                />
              }
            />
            <Route
              path="/participant/*"
              element={
                <Participant_home
                  username={session.user.user_metadata.name}
                  useremail={session.user.user_metadata.email}
                  session={session}
                  token={session.provider_token}
                />
              }
            />
          </>
        ) : (
          <></>
        )}
        <Route
          path="/"
          element={
            <Home
              googleSignIn={googleSignIn}
              googleSignInBusiness={googleSignInBusiness}
            />
          }
        />
        <Route path="*" element={<Error_page />} />
      </Routes>
    </>
  );
}

export default App;
