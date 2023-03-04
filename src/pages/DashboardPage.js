import { AiFillAliwangwang } from "react-icons/ai";
import { showCocktails } from "../config";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const renderedCocktailsLink = (
    <div>
      <h1 className="general-header">Cocktails</h1>
      <div className="dashboard-cocktails-description">
        I also create craft cocktails, so if you're interested in my liquid
        delights feel free to head on over and check that out to!
      </div>
      <Link to="/cocktails">
        <div className="dashboard-cocktails-link general-button">
          Go to Cocktails!
        </div>
      </Link>
    </div>
  );
  return (
    <div className="outer-wrapper">
      <div>
        <AiFillAliwangwang className="logo" />
      </div>
      <div className="text-content-wrapper dashboard-content">
        <p className="general-header">Hi there!</p>
        <p>I'm Devin.</p>
        <p>
          A Backend Software Engineer by day and a Cocktail Enthusiast by night.
          I like to build things and share them, so welcome, and thanks for
          dropping by!
        </p>
      </div>
      <div className="dashboard-extras">
        {showCocktails ? renderedCocktailsLink : undefined}
      </div>
    </div>
  );
};

export default DashboardPage;
