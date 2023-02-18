import { AiFillAliwangwang } from "react-icons/ai";

const DashboardPage = () => {
  return (
    <div>
      <div className="outer-wrapper">
        <div>
          <AiFillAliwangwang className="logo" />
        </div>
        <div className="text-content-wrapper dashboard-content">
          <p>Hi there!</p>
          <p>
            I'm Devin. I'm a Backend Software Engineer by day and a Cocktail
            Enthusiast by night. I like to build things and share them, so
            welcome, and thanks for dropping by!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
