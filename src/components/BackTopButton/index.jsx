import { useState, useEffect } from "react";
import Icon from "../Icon";

export default function BackTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-8 right-8 p-3 bg-gradient-to-t from-purple-900 to-purple-500 rounded-full shadow-lg duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <Icon icon="ArrowUp" color="#FFFFFF" size={24} />
        </button>
      )}
    </>
  );
}
