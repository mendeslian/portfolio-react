import HtmlIcon from "../../assets/html.svg";
import CssIcon from "../../assets/css.svg";
import TailwindCssIcon from "../../assets/tailwindcss.svg";
import JavascriptIcon from "../../assets/javascript.svg";
import TypescriptIcon from "../../assets/typescript.svg";
import ReactIcon from "../../assets/reactjs.svg";
import NodejsIcon from "../../assets/nodejs.svg";
import NextjsIcon from "../../assets/nextjs.svg";
import PostgresIcon from "../../assets/postgresql.svg";
import MongoDbIcon from "../../assets/mongodb.svg";

export default function IconsSection() {
  const iconsClassname = "w-[42px] h-[42px] duration-500 hover:scale-110";

  const techIcons = [
    { iconPath: HtmlIcon, iconTitle: "HTML" },
    { iconPath: CssIcon, iconTitle: "CSS" },
    { iconPath: TailwindCssIcon, iconTitle: "TailwindCSS" },
    { iconPath: JavascriptIcon, iconTitle: "Javascript" },
    { iconPath: TypescriptIcon, iconTitle: "Typescript" },
    { iconPath: ReactIcon, iconTitle: "React" },
    { iconPath: NodejsIcon, iconTitle: "NodeJS" },
    { iconPath: NextjsIcon, iconTitle: "NextJS" },
    { iconPath: PostgresIcon, iconTitle: "PostgreSQL" },
    { iconPath: MongoDbIcon, iconTitle: "MongoDB" },
  ];

  function TechIcon({ iconPath = "", iconTitle = "" }) {
    return (
      <li title={iconTitle}>
        <img
          loading="lazy"
          draggable="false"
          src={iconPath}
          alt={`Icon of ${iconTitle}`}
          className={iconsClassname}
        />
      </li>
    );
  }

  return (
    <section
      className="w-full h-full flex flex-col justify-center items-center gap-[48px] mb-[99px] px-[32px] md:px-[64px] lg:px-0"
      aria-label="Technologies and Skills"
    >
      <h2 className="text-[#C5C5C5] text-[20px] font-semibold text-center tracking-[12%] uppercase">
        Experience with
      </h2>
      <ul className="w-full grid grid-cols-2 md:grid-cols-5 place-items-center gap-x-[60px] gap-y-[40px] max-w-[200px] md:max-w-[600px]">
        {techIcons.map((techIcon) => (
          <TechIcon key={techIcon.iconTitle} {...techIcon} />
        ))}
      </ul>
    </section>
  );
}
