import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="screen-wrapper">
      <h1>MAIN Home</h1>
      <Link to="/business"> Business</Link>
      <Link to="/participant">Participant</Link>
    </div>
  );
}

export default Home;
