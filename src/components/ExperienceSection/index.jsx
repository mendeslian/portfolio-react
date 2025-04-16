import HistoryItem from "../HistoryItem";
import SpLogo from "../../assets/sem-processo.svg";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: SpLogo,
      title: "Full Stack Developer Intern",
      date: "Sep 2023 - Present",
      description:
        "As a Full Stack Developer Intern, I am actively involved in developing web applications using modern technologies such as React, Sass, Node.js, Express, MongoDB, and PostgreSQL. Working closely with the development team, I contribute to both frontend development with React and Sass, and backend development using Node.js with Express, implementing database solutions with MongoDB and PostgreSQL. This hands-on experience is helping me grow as a developer while delivering value to real-world projects and mastering the full development stack.",
      link: "https://www.semprocesso.com.br",
    },
  ];

  return (
    <section
      id="experience"
      aria-label="Work Experience"
      className="w-full flex flex-col justify-center items-center gap-[57px] mb-[96px] px-[32px] md:px-[64px] lg:px-0"
    >
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-500 text-[35px] font-extrabold leading-[35px] uppercase">
        Experience
      </h2>
      {experiences.map((experience, index) => {
        return (
          <HistoryItem
            key={index}
            historyIcon={experience.icon}
            historyTitle={experience.title}
            historyDate={experience.date}
            historyDescription={experience.description}
            historyLink={experience.link}
          />
        );
      })}
    </section>
  );
}
