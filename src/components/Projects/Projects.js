import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appmttos from "../../Assets/Projects/appmttos.png";
import biomedica from "../../Assets/Projects/biomedicapng.png";
import pag from "../../Assets/Projects/pag.png";
import kodland from "../../Assets/Projects/kodland.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="blue">EXPERIENCE </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects and work carried out
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kodland}
              title="Tutor."
              description="Currently, I am a tutor at Kodland, where I teach programming remotely to students. I lead courses on game 
              development in Scratch, Roblox, as well as Python courses tailored to the assigned groups."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pag}
              title="Web page."
              description="Development of a website for a cosmetic shop, with registration option, vendor login, 
              inventory updates, and sales tracking. The page was created using Node.js, React, and a MySQL database."
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={appmttos}
              title="Mobile application."
              description="Development of a mobile application for generating maintenance reports for equipment. 
              This application was created for personal use, allowing me to create and deliver service reports for biomedical equipment. 
              It was developed using Java in Android Studio."
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={biomedica}
              title="University Projects."
              description="In university, I worked on designing and developing simulations and prototypes of various biomedical 
              equipment. This involved data and signal acquisition through sensors to execute actuators according to the equipment's 
              requirements."            
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            >
              <h4 >
                <b className="blue">
                  Thank you for visiting my portfolio, and I look forward to the opportunity to contribute my skills 
                  and enthusiasm to exciting projects and teams in the future!
                </b>
              </h4>
          </Col>
        
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
