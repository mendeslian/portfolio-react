import Button from "../Button";
import ProfileImage from "../../assets/images/profile.png";
import CV from "../../assets/documents/LianMendes_CV.pdf";

export default function PresentationSection() {
  function handleDownload() {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "LianMendes_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center items-center gap-[54px] my-[88px] lg:my-0 lg:h-screen px-[32px] md:px-[64px] lg:px-0"
    >
      <article className="flex flex-col justify-center items-center gap-[40px]">
        <img
          src={ProfileImage}
          alt="Profile picture"
          loading="lazy"
          draggable="false"
          className="w-[213px] h-[213px] rounded-full object-cover"
        />
        <h1 className="w-full max-w-[670px] text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-purple-500 text-[35px] font-extrabold text-center leading-[44px] md:text-[55px] md:leading-[64px]">
          Building the web, one line at a time!
        </h1>
        <p className="w-full max-w-[679px] text-[#C5C5C5] text-[15px] font-light text-center tracking-[2%] md:text-[18px]">
          I am a Junior Full Stack Developer passionate about web development,
          currently working with React, Node.js, and modern databases. Pursuing
          a degree in Information Systems at CEFET-RJ while continuously
          learning and applying new technologies in real-world projects.
        </p>
      </article>
      <div className="flex flex-col justify-center items-center gap-[20px] md:flex-row">
        <a
          href="https://www.linkedin.com/in/lian-mendes-825295210/overlay/contact-info/"
          target="_blank"
          aria-label="Contact me"
          className="bg-neutral-50 hover:bg-neutral-200 disabled:bg-neutral-300 text-neutral-900 h-[64px] flex items-center justify-center gap-[8px] py-[16px] px-[30px] rounded-full cursor-pointer duration-200 drop-shadow-md text-[22px] font-semibold disabled:cursor-default hover:scale-[101%]"
        >
          Get In Touch
        </a>
        <Button aria-label="Download curriculum" onClick={handleDownload}>
          Download CV
        </Button>
      </div>
    </section>
  );
}
