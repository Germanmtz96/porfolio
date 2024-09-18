import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import foto from "../assets/fotoperfil.jpg";

function Intro() {
  return (
    <div className="presentacion">
      <div className="presentacion-top">
        <Avatar
          alt="Germán"
          src={foto}
          sx={{ width: 70, height: 70 }}
          style={{ marginRight: "20px" }}
        />
        <Chip
          style={{ backgroundColor: "#cfffc7", letterSpacing: "0.7px" }}
          className="animated-border-chip saira-semi-condensed-medium"
          label="Disponible para trabajar"
          color="primary"
          variant="outlined"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/germ%C3%A1n-mart%C3%ADnez-sanch%C3%A9z-a095a4318/",
              "_blank"
            )
          }
        />
      </div>
      <h1
        style={{ fontSize: "50px", margin: "0px", color: "#1b1b35" }}
        className="saira-semi-condensed-semibold"
      >
        Hola, soy Germán
      </h1>
      <p
        style={{ fontSize: "20px", color: "rgb(75 85 99)" }}
        className="intro saira-semi-condensed-medium"
      >
        Un aspirante a{" "}
        <span
          style={{ color: "#ffbc1b", fontSize: "22px" }}
          className="saira-semi-condensed-semibold"
        >
          Front-End Developer
        </span>
        , decidido a impulsar mi carrera en el campo de la tecnología, con
        conocimientos en el desarrollo web y un sólido manejo de{" "}
        <span
          style={{ color: "#ffbc1b", fontSize: "22px" }}
          className="saira-semi-condensed-semibold"
        >
          HTML, CSS, JavaScript y React.
        </span>
      </p>
      <div>
        <Chip
          style={{
            padding: "10px",
            marginRight: "20px",
            letterSpacing: "0.3px",
            fontSize: "14px",
          }}
          className="hover-effect saira-semi-condensed-medium"
          icon={<ForwardToInboxIcon sx={{ fontSize: 16 }} />}
          label="Contáctame"
          variant="outlined"
          onClick={() =>
            (window.location.href = "mailto:germanmtz96@outlook.com")
          }
        />
        <Chip
          style={{ padding: "10px", letterSpacing: "0.3px", fontSize: "14px" }}
          className="hover-effect saira-semi-condensed-medium"
          icon={<LinkedInIcon sx={{ fontSize: 16 }} />}
          label="LinkedIn"
          variant="outlined"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/germ%C3%A1n-mart%C3%ADnez-sanch%C3%A9z-a095a4318/",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}

export default Intro;
