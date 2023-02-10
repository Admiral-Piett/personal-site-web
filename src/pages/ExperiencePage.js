import { useState } from "react";

import { RxDot } from "react-icons/rx";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

import { v4 as uuidv4 } from "uuid";

const experience = [
  {
    shortTitle: "Sr. Developer",
    title: "Senior Backend Engineer",
    company: "URBN Inc.",
    dates: "2019 - Present",
    tasks: [
      "Head engineer of a RESTful API microservice and event processing platform, written in Python and Go, supporting over 35m orders per year and resulting in $5.5b.",
      "Architect and lead engineer on an asynchronous order submission pattern generating over $450k and counting.",
      "Designed highly performant solutions with an increase in speed by 50%.",
      "Lead the department's learning culture through mentorship, pair programming, and team collaboration.",
      "Creator and owner of a batch processing framework supporting large-scale asynchronous processing including ETL and database management.",
      "Implement and design cloud-based CICD solutions to support the migration of the entire stack into the cloud.",
    ],
  },
  {
    shortTitle: "Developer",
    title: "Software Engineer",
    company: "Optum Analytics",
    dates: "2015 - 2019",
    tasks: [
      "Architect of a multi-tenant ETL platform serving integrations for over 1000 providers.",
      "Maintained multiple custom integrations, including real-time file sharing and RESTful solutions, serving over 40 different clients.",
      "Full-stack development on distributed web apps supporting multiple frameworks including Django, Flask, Ruby on Rails, and React.",
      "Designed and implemented custom UI solutions for over 50 clients using front-end technology such as CSS, HTML, Javascript, and JQuery.",
    ],
  },
  {
    shortTitle: "Sr. Business Analyst",
    title: "Senior Business Analyst",
    company: "Optum Analytics",
    dates: "2015 - 2019",
    tasks: [
      "Design, implement, and deploy custom solutions for over 50 clients.",
      "Assess and prioritize incoming client requests and features, based on scope, value, and level of effort.",
      "Liaise between engineering, internal teams, and clients, by designing and communicating solutions to both technical and non-technical stakeholders.",
    ],
  },
];

const ExperiencePage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(index);
  };

  const renderedExperience = experience.map((entry, index) => {
    if (openIndex !== index) {
      return false;
    }
    return (
      <div key={uuidv4()}>
        <h1 className="experience-title">{entry.title}</h1>
        <h3>{entry.company}</h3>
        <p className="experience-dates">{entry.dates}</p>
        <ul className="experience-list">
          {entry.tasks.map((task) => {
            return (
              <li key={uuidv4()}>
                <div className="experience-task">
                  <RxDot className="experience-task-bullet" />
                  <p>{task}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  const renderedMenu = experience.map((entry, index) => {
    const isSelected = openIndex === index;
    return (
      <div
        className="experience-menu-list"
        onClick={() => {
          handleClick(index);
        }}
        key={uuidv4()}
      >
        <div className="experience-menu-button">
          {isSelected ? <BiRightArrow /> : <BiDownArrow />}
        </div>
        <div className="experience-menu-title">{entry.shortTitle}</div>
      </div>
    );
  });

  return (
    <div className="experience-wrapper">
      <div>{renderedMenu}</div>
      <div>{renderedExperience}</div>
    </div>
  );
};

export default ExperiencePage;
