export default function Header() {
  const listItemsClass =
    "text-[13px] text-[#C5C5C5] font-medium tracking-[2%] cursor-pointer duration-500 relative px-[6px] hover:text-white focus:text-white focus:outline-none before:content-[''] before:absolute before:rounded-full before:bottom-[-6px] before:left-0 before:w-0 before:h-[3px] before:bg-gradient-to-r before:from-purple-900 before:to-purple-500 before:duration-500 hover:before:w-full focus:before:w-full md:text-[15px] md:px-[10px] ";

  return (
    <header className="w-full h-[82px] bg-[#222222] flex items-center justify-center">
      <nav
        className="w-full max-w-[810px] h-full flex justify-center items-center gap-0 md:gap-[14px] lg:gap-[61px]"
        aria-label="Main navigation"
      >
        <a href="#home" className={listItemsClass}>
          Home
        </a>
        <a href="#projects" className={listItemsClass}>
          Projects
        </a>
        <a href="#experience" className={listItemsClass}>
          Experience
        </a>
        <a href="#graduation" className={listItemsClass}>
          Graduation
        </a>
        <a href="#footer" className={listItemsClass}>
          Contact
        </a>
      </nav>
    </header>
  );
}
