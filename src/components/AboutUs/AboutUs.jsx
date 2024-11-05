import "./AboutUs.css";
import { Link, Outlet } from "react-router-dom"; // New import

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="site-history">Site History</Link>
        </li>
        <li>
          <Link to="site-mission">Site Mission</Link>
        </li>
      </ul>
      <p>You can find out more information about our site here.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
