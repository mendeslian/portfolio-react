import CefetLogo from "../../assets/cefet.svg";
import UdemyLogo from "../../assets/udemy.svg";
import HistoryItem from "../HistoryItem";

export default function GraduationSection() {
  const graduations = [
    {
      icon: CefetLogo,
      title: "Bachelor's Degree in Information Systems",
      date: "Sep 2022 - Dec 2026",
      description:
        "Currently pursuing a Bachelor's degree in Information Systems at CEFET, focusing on software development, database management, and system architecture. Engaging in practical projects and theoretical studies to build a strong foundation in both technical and business aspects of IT.",
      link: "https://www.cefet-rj.br/index.php/bacharelado-em-sistemas-de-informacao-maria-da-graca",
    },
    {
      icon: UdemyLogo,
      title: "JavaScript and TypeScript course",
      date: "Jan 2024 - Dec 2024",
      description:
        "Enrolled in a JavaScript and TypeScript course on Udemy, covering a wide range of topics. The course emphasizes practical application and problem-solving through hands-on projects. The course has provided valuable insights into modern web development and JavaScript/TypeScript programming.",
      link: "https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado",
    },
    {
      icon: UdemyLogo,
      title: "React from Zero to Mastery",
      date: "Jan 2024 - Dec 2024",
      description:
        "Taking an extensive React course that covers everything from fundamentals to advanced concepts. Learning to build modern web applications using hooks, context API, Redux, and Next.js. The curriculum includes hands-on projects, performance optimization, testing, and deployment strategies for React applications.",
      link: "https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos",
    },
  ];

  return (
    <section
      id="graduation"
      aria-label="Academic Education"
      className="w-full flex flex-col justify-center items-center gap-[57px] mb-[107px] px-[32px] md:px-[64px] lg:px-0"
    >
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-blue-900 to-blue-500 text-[35px] font-extrabold leading-[35px] uppercase">
        Graduation
      </h2>
      {graduations.map((graduation, index) => (
        <HistoryItem
          key={index}
          historyIcon={graduation.icon}
          historyTitle={graduation.title}
          historyDate={graduation.date}
          historyDescription={graduation.description}
          historyLink={graduation.link}
        />
      ))}
    </section>
  );
}
