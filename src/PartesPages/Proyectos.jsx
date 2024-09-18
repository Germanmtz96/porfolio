import React from "react";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import Avatar from "@mui/material/Avatar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextPreview from "../Componentes/TextPreview";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import react from "../assets/iconos/react.png";
import bootstrap from "../assets/iconos/bootstrap.png";
import axios from "../assets/iconos/axios.png";
import jwt from "../assets/iconos/jwt.png";
import mongodb from "../assets/iconos/mongodb.png";
import node from "../assets/iconos/node-js.png";
import nodemailer from "../assets/iconos/nodemailer.png";
import rest from "../assets/iconos/rest-api.png";
import reixel1 from "../assets/reixelnails1.png";
import reixel2 from "../assets/reixelnails2.png";
import reixelCuadrado from "../assets/reixelcuadrado.png";
import reixel3 from "../assets/reixelnails3.png";
import reixel4 from "../assets/reixelnails4.png";
import reixel5 from "../assets/reixelnails5.png";
import anime1 from "../assets/searchanime1.png";
import animeCuadrado from "../assets/animecuadrado.png";
import anime2 from "../assets/searchanime2.png";
import anime3 from "../assets/searchanime3.png";
import juegonaves from "../assets/juegonaves.png";
import js from "../assets/iconos/js.png";
import css from "../assets/iconos/css.png";
import html from "../assets/iconos/html.png";
import localstorage from "../assets/iconos/localstorage.png";

function Proyectos() {
  const reixelText = `Desarrollo de una aplicación web Full-Stack que permite a los usuarios, tras un proceso de autenticación, registrarse para gestionar citas o interactuar con imágenes mediante comentarios y "likes" desde cualquier dispositivo. Las imágenes y citas son publicadas exclusivamente por un administrador, quien también gestiona una agenda privada con todas las fechas y horarios de las citas, así como una base de datos que almacena los datos de contacto de todos los usuarios. Creado desde cero con Express.js, React y Bootstrap.`;
  const animewebText = `SearchAnime es un proyecto web que desarrollé en colaboración con mi compañero de IronHack, Huanye. El sitio está enfocado en el front-end y permite a los usuarios buscar cualquier tipo de anime a través de una API externa. Una característica destacada es la posibilidad de agregar comentarios a los animes buscados, proporcionando una experiencia interactiva, aunque no se implementaron sistemas de autenticación ni roles de usuario. Este proyecto fue una excelente oportunidad para aplicar y consolidar mis conocimientos en desarrollo web, trabajando en equipo en un entorno ágil. Además, utilizamos varias ramas en GitHub para integrar y gestionar eficientemente los avances de cada uno. Creado desde cero con React y Bootstrap.`;
  const gameText = ` Como mi primer proyecto, Spaceships Game es un juego interactivo basado en web que ofrece una experiencia de juego atractiva. Muestra habilidades de programación, diseño de juegos y desarrollo de interfaces de usuario.
Desarrollado por mí mismo como un proyecto de capacitación en IronHack Bootcamp, Spaceships Game demuestra mi capacidad para aplicar conocimientos teóricos a proyectos prácticos y desafiantes.`;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="proyectos" className="proyectos">
      <h1
        icon={
          <CodeIcon
            style={{ color: "#1b1b35", marginRight: "5px" }}
            sx={{ width: 30, height: 30 }}
          />
        }
        label="Proyectos"
        className="saira-semi-condensed-semibold"
        style={{
          backgroundColor: "white",
          fontSize: "30px",
          color: "#1b1b35",
          marginTop: "60px",
          marginBottom: "0px",
          letterSpacing: "0.7px",
        }}
      >
        {" "}
        &lt;/&gt; Proyectos
      </h1>
      <div className="container-proyecto">
        <div className="contenido-proyecto-reixel">
          <img
            className="img-proyecto"
            src={reixelCuadrado}
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <div className="todo-menos-foto">
            <h1
              className="titulos-proyectos saira-semi-condensed-semibold"
              style={{
                color: "#1b1b35",
                fontSize: "22px",
                margin: "0px",
                marginBottom: "10px",
              }}
            >
              Reixelnails - Gestor de citas e interacción social
            </h1>
            <div className="etiquetas-proyecto">
              <Chip
                style={{
                  backgroundColor: "#0f0f3e",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="React"
                avatar={
                  <Avatar
                    src={react}
                    style={{
                      backgroundColor: "#1b1b3500",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
              <Chip
                style={{
                  backgroundColor: "#bb84d5",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="Bootstrap"
                avatar={
                  <Avatar
                    src={bootstrap}
                    style={{
                      backgroundColor: "#1b1b3500",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
              <Chip
                style={{
                  backgroundColor: "#ddbf27",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="Node.js"
                avatar={
                  <Avatar
                    src={node}
                    style={{
                      backgroundColor: "#1b1b3500",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
              <Chip
                style={{
                  backgroundColor: "#ff9532",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="Mongodb"
                avatar={
                  <Avatar
                    src={mongodb}
                    style={{
                      backgroundColor: "#1b1b3500",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
              <Chip
                style={{
                  backgroundColor: "#548e39",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="jwt"
                avatar={
                  <Avatar
                    src={jwt}
                    style={{
                      backgroundColor: "#1b1b3500",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
              
              <Chip
                style={{
                  backgroundColor: "#6340a0",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="Axios"
                avatar={
                  <Avatar
                    src={axios}
                    style={{
                      backgroundColor: "#1b1b3500",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
              <Chip
                style={{
                  backgroundColor: "#ff3932",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="Cloudinary"
                icon={
                  <CloudUploadIcon
                    style={{
                      color: "white",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
              <Chip
                style={{
                  backgroundColor: "#a04057",
                  color: "white",
                  padding: "5px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                size="small"
                label="Nodemailer"
                avatar={
                  <Avatar
                    src={nodemailer}
                    style={{
                      backgroundColor: "#1b1b3500",
                      height: "18px",
                      width: "18px",
                      padding: "5px",
                    }}
                  />
                }
              />
            </div>
            <div className="texto-proyectos">
            <TextPreview text={reixelText} />
            </div>
            <div className="enlaces-proyecto-reixel">
              <Button
                className="hover-effect"
                variant="outlined"
                size="medium"
                onClick={() =>
                  window.open(
                    "https://github.com/Germanmtz96/M3_webnails",
                    "_blank"
                  )
                }
                style={{
                  backgroundColor: "#f3f3f3",
                  textTransform: "capitalize",
                  marginRight: "15px",
                  color: "#1b1b35",
                  borderColor: "#dadada",
                }}
              >
                <GitHubIcon
                  className="icon"
                  style={{
                    marginRight: "8px",
                    height: "24px",
                    color: "#1b1b35",
                  }}
                />
                Code
              </Button>
              <Button
                className="hover-effect"
                variant="outlined"
                size="medium"
                onClick={() =>
                  window.open("https://reixelnails.netlify.app", "_blank")
                }
                style={{
                  backgroundColor: "#f3f3f3",
                  textTransform: "capitalize",
                  color: "#1b1b35",
                  borderColor: "#dadada",
                }}
              >
                <LinkIcon
                  className="icon"
                  style={{
                    marginRight: "8px",
                    height: "24px",
                    color: "#1b1b35",
                  }}
                />
                Preview
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-proyecto" style={{ marginTop: "40px" }}>
        <div className="contenido-proyecto-anime">
          <img
          className="img-proyecto-anime"
            src={animeCuadrado}
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <div className="todo-menos-foto">
        <h1
          className="titulos-proyectos saira-semi-condensed-semibold"
          style={{
            color: "#1b1b35",
            fontSize: "22px",
            margin: "0px",
            marginBottom: "10px",
          }}
        >
          SearchAnime - Buscador de anime
        </h1>
        <div className="etiquetas-proyecto-anime">
          <Chip
            style={{
              backgroundColor: "#0f0f3e",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="React"
            avatar={
              <Avatar
                src={react}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#bb84d5",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="Bootstrap"
            avatar={
              <Avatar
                src={bootstrap}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#ddbf27",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="Node.js"
            avatar={
              <Avatar
                src={node}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#40a08c",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="REST API"
            avatar={
              <Avatar
                src={rest}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#6340a0",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="Axios"
            avatar={
              <Avatar
                src={axios}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
        </div>
        <div className="texto-proyectos">
        <TextPreview text={animewebText} />
        </div>
        <div className="enlaces-proyecto-anime">
          <Button
            className="hover-effect"
            variant="outlined"
            size="medium"
            onClick={() =>
              window.open(
                "https://github.com/Germanmtz96/M2-anime-web",
                "_blank"
              )
            }
            style={{
              backgroundColor: "#f3f3f3",
              textTransform: "capitalize",
              marginRight: "15px",
              color: "#1b1b35",
              borderColor: "#dadada",
            }}
          >
            <GitHubIcon
              className="icon"
              style={{ marginRight: "8px", height: "24px", color: "#1b1b35" }}
            />
            Code
          </Button>
          <Button
            className="hover-effect"
            variant="outlined"
            size="medium"
            onClick={() =>
              window.open("https://searchanimes.netlify.app", "_blank")
            }
            style={{
              backgroundColor: "#f3f3f3",
              textTransform: "capitalize",
              color: "#1b1b35",
              borderColor: "#dadada",
            }}
          >
            <LinkIcon
              className="icon"
              style={{ marginRight: "8px", height: "24px", color: "#1b1b35" }}
            />
            Preview
          </Button>
          </div>
          </div>
        </div>
      </div>

      <div className="container-proyecto" style={{ marginTop: "40px" }}>
      <div className="contenido-proyecto-minijuego">
        <img
        className="img-proyecto-minijuego"
          src={juegonaves}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <div className="todo-menos-foto">
        <h1
          className="titulos-proyectos saira-semi-condensed-semibold"
          style={{
            color: "#1b1b35",
            fontSize: "22px",
            margin: "0px",
            marginBottom: "10px",
          }}
        >
          Spaceships Game - Proyecto de minijuego web
        </h1>
        <div className="etiquetas-proyecto-minijuego">
          <Chip
            style={{
              backgroundColor: "#0f0f3e",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="HTML"
            avatar={
              <Avatar
                src={html}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#ff9532",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="JavaScript"
            avatar={
              <Avatar
                src={js}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "24px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#ddbf27",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="CSS"
            avatar={
              <Avatar
                src={css}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#548e39",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="Local Storage"
            avatar={
              <Avatar
                src={localstorage}
                style={{
                  backgroundColor: "#1b1b3500",
                  height: "18px",
                  width: "18px",
                  padding: "5px",
                }}
              />
            }
          />
          <Chip
            style={{
              backgroundColor: "#40a08c",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="Manipulación de DOM"
          />
          <Chip
            style={{
              backgroundColor: "#6340a0",
              color: "white",
              padding: "5px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            size="small"
            label="Clases JS"
          />
        </div>
        <div className="texto-proyectos">
        <TextPreview text={gameText} />
        </div>
        <div className="enlaces-proyecto-minijuego">
          <Button
            className="hover-effect"
            variant="outlined"
            size="medium"
            onClick={() =>
              window.open(
                "https://github.com/Germanmtz96/spaceships_game?tab=readme-ov-file",
                "_blank"
              )
            }
            style={{
              backgroundColor: "#f3f3f3",
              textTransform: "capitalize",
              marginRight: "15px",
              color: "#1b1b35",
              borderColor: "#dadada",
            }}
          >
            <GitHubIcon
              className="icon"
              style={{ marginRight: "8px", height: "24px", color: "#1b1b35" }}
            />
            Code
          </Button>
          <Button
            className="hover-effect"
            variant="outlined"
            size="medium"
            onClick={() =>
              window.open(
                "https://germanmtz96.github.io/spaceships_game/",
                "_blank"
              )
            }
            style={{
              backgroundColor: "#f3f3f3",
              textTransform: "capitalize",
              color: "#1b1b35",
              borderColor: "#dadada",
            }}
          >
            <LinkIcon
              className="icon"
              style={{ marginRight: "8px", height: "24px", color: "#1b1b35" }}
            />
            Preview
          </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
