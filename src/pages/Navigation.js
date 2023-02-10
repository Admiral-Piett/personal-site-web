import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
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
          {/*<li className="link-li">*/}
          {/*  <Link to="/music">Music</Link>*/}
          {/*</li>*/}
          {/*<li className="link-li">*/}
          {/*  <Link to="/cocktails">Cocktails</Link>*/}
          {/*</li>*/}
          <li className="link-li">
            <Link to="/contact">Contact</Link>
          </li>
          {/*<li className="link-li">*/}
          {/*  <Link to="/admin">Admin</Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
