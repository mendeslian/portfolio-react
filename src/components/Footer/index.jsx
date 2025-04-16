import Icon from "../Icon";

import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Contact Information"
      className="w-full h-[420px] bg-[#191919] flex justify-center items-center px-[32px] md:px-[64px] lg:px-0"
    >
      <div className="w-full max-w-[810px] h-full flex flex-col justify-center items-center gap-[22px] md:items-start ">
        <article className="flex flex-col justify-center gap-[34px]">
          <h2 className="text-[24px] text-white font-bold text-center md:text-left">
            Contact
          </h2>
          <p className="text-[14px] text-[#C5C5C5] font-light text-center md:text-left">
            Junior Full Stack Developer with a strong foundation in web
            development. Currently focused on building modern web applications
            using React, Node.js, and various database technologies. Always
            eager to connect and discuss new opportunities in tech.
          </p>
        </article>
        <article className="flex items-center gap-[7px]">
          <Icon icon="Mail" color="#FFFFFF" size={14} />
          <span className="text-[14px] text-[#C5C5C5] font-semibold">
            nailptm@gmail.com
          </span>
        </article>
        <nav className="flex  gap-[27px]">
          <a
            rel="noopener noreferrer"
            href="https://github.com/mendeslian"
            target="_blank"
            className="duration-200 hover:scale-110"
          >
            <img
              loading="lazy"
              src={GithubIcon}
              alt="Logo do Github"
              draggable="false"
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lian-mendes-825295210"
            target="_blank"
            className="duration-200 hover:scale-110"
          >
            <img
              loading="lazy"
              src={LinkedinIcon}
              alt="Logo do LinkedIn"
              draggable="false"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
}
