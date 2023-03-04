import { Link, Outlet } from "react-router-dom";
import ContactInfo from "./ContactInfo";

const Navigation = () => {
  const handleResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/static/public_resume.pdf`);
  };
  return (
    <div>
      <nav className="navigation-bar">
        <ul className="link-ul">
          <li className="link-li">
            <Link to="/">Home</Link>
          </li>
          <li className="link-li">
            <Link to="/about">About</Link>
          </li>
          <li className="link-li">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="link-li">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="link-li">
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={handleResumeClick} className="link-li">
            <button>Resume</button>
          </li>
        </ul>
      </nav>
      <ContactInfo />
      <Outlet />
    </div>
  );
};

export default Navigation;
