import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import arrowUp from "./images/arrow-up.svg"; 

const BackToTop = () => {
  const backToTopRef = document.querySelector(".back-to-top"); // Create a ref for the button
  const [isBackToTopRendered, setIsBackToTopRendered] = useState(false);

  useEffect(() => {
    const alterStyles = () => {
      if (backToTopRef) {
        backToTopRef.style.visibility = isBackToTopRendered
          ? "visible"
          : "hidden";
        backToTopRef.style.opacity = isBackToTopRendered ? 1 : 0;
        backToTopRef.style.transform = isBackToTopRendered
          ? "scale(1)"
          : "scale(0)";
      }
    };

    alterStyles(); // Apply styles on state change
  }, [isBackToTopRendered]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsBackToTopRendered(true);
      } else {
        setIsBackToTopRendered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link to="top" className="back-to-top" title="Back to Top" smooth={true} duration={100}>
      <img src={arrowUp} alt="Back to Top" className="back-to-top__image" />
    </Link>
  );
};

export default BackToTop;
