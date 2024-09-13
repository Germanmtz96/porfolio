import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);

      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop - 60 &&
          window.scrollY < sectionTop + sectionHeight - 60
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "-20px" }}
    >
      <Stack
        direction="row"
        className={`${
          isFixed ? "fixed" : ""
        } saira-semi-condensed-medium scroll`}
        spacing={1}
      >
        <a
          href="#experiencia"
          className={`navbar ${activeLink === "experiencia" ? "active" : ""}`}
        >
          Experiencia
        </a>
        <a
          href="#proyectos"
          className={`navbar ${activeLink === "proyectos" ? "active" : ""}`}
        >
          Proyectos
        </a>
        <a
          href="#sobre-mi"
          className={`navbar ${activeLink === "sobre-mi" ? "active" : ""}`}
        >
          Sobre mí
        </a>
        <a href="mailto:germanmtz96@outlook.com" className="navbar">
          Contacto
        </a>
      </Stack>
    </div>
  );
}

export default Navbar;
