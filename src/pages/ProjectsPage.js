import { v4 as uuidv4 } from "uuid";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Musizticle",
    shortDescription: "2-Piece Music streaming Service in Golang",
    description: `A 2-part distributed music streaming service that can be deployed locally and in the cloud.  The backend can 
      find relevant mp3 files, build a library, and stream these files to a separate gui "front end".\n\nBoth parts are
       written in Go and designed to be cross-compiled on multiple platforms including Linux, Android, Windows, 
       MacOS, and more.`,
    tech: ["Go", "Docker", "Github Actions"],
    githubLinks: [
      {
        repo: "GUI",
        link: "https://github.com/Admiral-Piett/musizticle-gui",
      },
      {
        repo: "API",
        link: "https://github.com/Admiral-Piett/musizticle",
      },
    ],
    image: undefined,
  },
  {
    title: "Chattington",
    shortDescription:
      "Light-weight chat application serving telnet connections",
    description: `A simple terminal chat application serving multiple client connections written in pure Go.  
    Supports the creation and use of multiple chat rooms and clients connecting to a server via the telnet protocol.`,
    tech: ["Go", "Shell", "Docker"],
    githubLinks: [
      {
        // repo: "Chattington",
        link: "https://github.com/Admiral-Piett/chattington",
      },
    ],
    image: undefined,
  },
  {
    title: "OAuth Spotify Service",
    shortDescription: "Spotify OAuth Service for Apple TV Applications",
    description: `A RESTful API service and basic front-end supporting OAuth Authentications with Spotify accounts.  
      It was originally designed to be used as the authentication for an Apple TV Spotify Application.`,
    tech: ["Python", "Flask", "HTML"],
    githubLinks: [
      {
        // repo: "SpotifiTV-Server",
        link: "https://github.com/ashleyvaccaro/SpotifiTV-Server",
      },
    ],
    image: undefined,
  },
];

const ProjectsPage = () => {
  const renderedProjects = projects.map((project) => {
    return (
      <div key={uuidv4()} className="project-wrapper">
        <img
          className="project-image"
          src={
            /*TODO sort this link -*/ `${process.env.PUBLIC_URL}/static/20190504_201005.jpg`
          }
          alt="project"
        />
        <div className="project-meta">
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-tech">
            {project.tech.map((t) => {
              return (
                <div key={uuidv4()} className="project-tech-entry">
                  {t}
                </div>
              );
            })}
          </div>
          {project.githubLinks.map((g) => {
            return (
              <div key={uuidv4()} className="project-link">
                {g.repo ? <div>{g.repo}:</div> : undefined}
                <a className="project-link-a" href={g.link}>
                  <FaExternalLinkAlt />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="outer-wrapper">
      <div className="project-header">Check out some stuff I've built</div>
      <div className="project-group">{renderedProjects}</div>
    </div>
  );
};

export default ProjectsPage;
