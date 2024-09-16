import React from "react";
import Chip from "@mui/material/Chip";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import foto from "../assets/fotoperfil.jpg";

function SobreMi() {
  return (
    <div id="sobre-mi">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chip
          icon={
            <PersonOutlineIcon
              style={{ color: "#1b1b35", marginRight: "5px" }}
              sx={{ width: 30, height: 30 }}
            />
          }
          style={{
            backgroundColor: "white",
            color: "#1b1b35",
            marginTop: "68px",
            marginBottom: "80px",
            marginRight: "-15px",
          }}
        ></Chip>
        <h1
          className="saira-semi-condensed-semibold"
          style={{
            backgroundColor: "white",
            fontSize: "30px",
            color: "#1b1b35",
            marginTop: "60px",
            letterSpacing: "0.7px",
          }}
        >
          Sobre mí
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={foto}
          style={{
            width: "200px",
            marginTop: "-50px",
            marginBottom: "20px",
            border: "#637296 5px double",
            borderRadius: "10px",
            transform: "rotate(6deg)",
          }}
        />
      </div>
      <p
        className="saira-semi-condensed-regular"
        style={{ color: "rgb(75 85 99)" }}
      >
        Hola, soy Germán, un
        <span
          style={{ color: "#ffbc1b" }}
          className="saira-semi-condensed-medium"
        >
          {" "}
          Front-End Developer
        </span>{" "}
        decidido a impulsar mi carrera en el campo de la tecnología. Tengo un sólido manejo de
        <span
          style={{ color: "#ffbc1b" }}
          className="saira-semi-condensed-medium"
        >
          {" "}
          HTML, CSS, JavaScript, y React
        </span>
        , así como experiencia en back-end con
        <span
          style={{ color: "#ffbc1b" }}
          className="saira-semi-condensed-medium"
        >
          {" "}
          Node.js y Express
        </span>
        .
      </p>{" "}
      <p
        className="saira-semi-condensed-regular"
        style={{ color: "rgb(75 85 99)" }}
      >
        He desarrollado y colaborado en varios proyectos web, como
        <span
          style={{ color: "#ffbc1b" }}
          className="saira-semi-condensed-medium"
        >
          {" "}
          Reixelnails, una aplicación Full-Stack para la gestión de citas e
          interacción social, y SearchAnime, un sitio web que permite buscar
          animes a través de una API externa
        </span>
        . Estos proyectos me han permitido aplicar y consolidar mis
        conocimientos en desarrollo web, trabajando en equipo y enfrentando
        desafíos reales.
      </p>{" "}
      <p
        className="saira-semi-condensed-regular"
        style={{ color: "rgb(75 85 99)" }}
      >
        Antes de mi transición al desarrollo web,
        <span
          style={{ color: "#ffbc1b" }}
          className="saira-semi-condensed-medium"
        >
          {" "}
          trabajé en Mercadona y Domino's Pizza, donde desarrollé habilidades de
          adaptabilidad, trabajo en equipo, y formación de personal
        </span>
        .
      </p>{" "}
      <p
        className="saira-semi-condensed-regular"
        style={{ color: "rgb(75 85 99)" }}
      >
        Estoy abierto a nuevas oportunidades para continuar creciendo como
        desarrollador y contribuir con mis habilidades en proyectos innovadores
        y desafiantes.
      </p>
    </div>
  );
}

export default SobreMi;
