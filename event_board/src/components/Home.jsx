import { Link } from "react-router-dom";
import Business_api_events from "./Business_api_events";

function Home() {
  const size_show = 10;
  return (
    <div className="screen-wrapper">
      <div className="main-header">
        <img
          className="company-logo"
          src="/around-the-world.png"
          alt="Company logo"
        />
        <p className="main-header-slogan">
          Create and Share Your Event, Discover the Perfect One for You!
        </p>
      </div>
      <h1 className="home-title">
        Connecting People Through Events That Matter
      </h1>
      <div className="sign-form-wrapper">
        <div className="login-card">
          <img
            className="img-login-card"
            src="https://gloriathemes.com/wp-content/uploads/2023/01/website-content.jpg"
            alt=""
          />
          <h2 className="title-sign-in">
            Ready to create and share events that bring people together?
          </h2>
          <p className="sign-in-description">
            Sign up now to host your event and make it the next big thing!
          </p>
          <Link to="/business"> Business</Link>
          <button className="sign-in">
            <img className="g-icon" src="../../public/gmail.png" alt="" />
            Sign in with Google
          </button>
        </div>
        <div className="login-card">
          <img
            className="img-login-card"
            src="https://www.contentstadium.com/wp-content/uploads/2022/10/event-social-media-post-examples.jpg"
            alt=""
          />
          <h2 className="title-sign-in">
            Find events you love and be part of the experience!
          </h2>
          <p className="sign-in-description">
            Sign up today to discover events tailored to your passions and add
            them to your Google Calendar so you never miss out!!
          </p>
          <Link to="/participant">Participant</Link>
          <button className="sign-in">
            <img className="g-icon" src="../../public/gmail.png" alt="" />
            Sign in with Google
          </button>
        </div>
      </div>

      <main className="events-block">
        <h3 className="events-block-title">
          Events you might be intrested in:
        </h3>
        <Business_api_events size={size_show} />
      </main>
    </div>
  );
}

export default Home;
