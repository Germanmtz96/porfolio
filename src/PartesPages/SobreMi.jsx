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
      <div className="contenido-sobre-mi">
        <div
          className="foto-sobre-mi"
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
        <div className="texto-sobre-mi">
          <p
            className="saira-semi-condensed-regular"
            style={{ color: "rgb(75 85 99)" }}
          >
            Soy un
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              Front-End Developer
            </span>{" "}
            decidido a impulsar mi carrera en el campo tecnológico. Tengo un
            sólido manejo de
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              HTML, CSS, JavaScript, y React
            </span>
            , y en back-end con
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
            He desarrollado y colaborado en una
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              aplicación Full-Stack
            </span>{" "}
            para la gestión de citas e interacción social, un
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              sitio web interactivo basado en animaciones con GSAP,
            </span>{" "}
            diseñado como una experiencia narrativa gamificada donde los
            usuarios navegan entre “salas”, responden preguntas y consumen
            contenido multimedia a través de una
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              API externa
            </span>{" "}
            y una
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              aplicación para la Shopify App Store
            </span>{" "}
            que permite a tiendas generar automáticamente archivos llm.txt con
            un solo clic, optimizando la estructura del contenido para
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              mejorar el SEO
            </span>{" "}
            y facilitar su interpretación por
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              agentes de inteligencia artificial.
            </span>
          </p>
          <p
            className="saira-semi-condensed-regular"
            style={{ color: "rgb(75 85 99)" }}
          >
            Estos proyectos me han permitido consolidar mis conocimientos,
            <span
              style={{ color: "#ffbc1b" }}
              className="saira-semi-condensed-medium"
            >
              {" "}
              trabajando en equipo y adaptandome en desafíos reales.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
