import React from "react";

import CV from "../assets/CV.pdf";

function Footer() {
  return (
    <div
      className="footer saira-semi-condensed-regular"
      style={{ color: "rgb(75 85 99)", fontSize: "14px", marginTop: "90px" }}
    >
      <p style={{ fontSize: "12px" }}>
        <span style={{ fontFamily: "Arial, sans-serif" }}>©</span> 2024 Germán.
        Todos los derechos reservados.
      </p>
      <div>
        <a
          href={CV}
          download="CV-GermanMartinez2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
        <a
          href="https://www.linkedin.com/in/germ%C3%A1n-mart%C3%ADnez-sanch%C3%A9z-a095a4318/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Germanmtz96"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a href="mailto:germanmtz96@outlook.com">Contacto</a>
      </div>
    </div>
  );
}

export default Footer;
