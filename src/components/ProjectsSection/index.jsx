import Icon from "../Icon";

import AuthProjectImage from "../../assets/images/auth-project.svg";
import GitHubSearcProjectImage from "../../assets/images/github-search-project.svg";

export default function ProjectsSection() {
  const projects = [
    {
      projectName: "Authentication",
      projectImage: AuthProjectImage,
      projectPath: "",
      isReady: false,
    },
    {
      projectName: "Github Search",
      projectImage: GitHubSearcProjectImage,
      projectPath: "",
      isReady: false,
    },
  ];

  function ProjectCard({
    projectName = "",
    projectImage = "",
    projectPath = "",
    isReady = true,
  }) {
    return (
      <div
        className="w-[390px] h-[301px] shadow-2xl overflow-hidden rounded-[18px] bg-transparent"
        title={projectName}
      >
        <img
          loading="lazy"
          src={projectImage}
          alt={`Screenshot of ${projectName} project`}
          draggable="false"
          className={`w-full h-[235px] rounded-t-[18px] duration-500 ${
            isReady ? "transform hover:scale-110" : ""
          } object-cover ${!isReady ? "grayscale cursor-not-allowed" : ""}`}
        />
        {isReady ? (
          <a
            href={projectPath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[66px] bg-[#2A2A2A] flex flex-col justify-center rounded-b-[18px] px-[23px] text-white text-[19px] font-extrabold leading-[20px] uppercase font-inter relative"
          >
            <span className="text-[#C5C5C5] text-[10px] font-extrabold leading-[19px] uppercase font-inter">
              Click here to visit
            </span>
            {projectName}
            <Icon
              icon="ArrowUpRight"
              color="#FFFFFF"
              className="absolute right-[19px]"
            />
          </a>
        ) : (
          <div
            title="Coming Soon"
            className="w-full h-[66px] bg-[#2A2A2A] flex flex-col justify-center rounded-b-[18px] px-[23px] text-white/50 text-[19px] font-extrabold leading-[20px] uppercase font-inter relative cursor-not-allowed"
          >
            <span className="text-[#C5C5C5]/50 text-[10px] font-extrabold leading-[19px] uppercase font-inter">
              Coming soon
            </span>
            {projectName}
          </div>
        )}
      </div>
    );
  }

  return (
    <section
      id="projects"
      aria-label="Projects Portfolio"
      className="w-full flex flex-col justify-center items-center gap-[48px] mb-[96px] px-[32px] lg:px-0"
    >
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-orange-900 to-orange-500 text-[35px] font-extrabold leading-[35px] uppercase">
        Projects
      </h2>
      <nav className="w-full max-w-[810px] flex flex-wrap justify-center items-center gap-[30px] ">
        {projects.map((project) => {
          return <ProjectCard key={project.projectName} {...project} />;
        })}
      </nav>
    </section>
  );
}
