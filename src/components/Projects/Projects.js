import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appmttos from "../../Assets/Projects/appmttos.png";
import biomedica from "../../Assets/Projects/biomedicapng.png";
import pag from "../../Assets/Projects/pag.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="blue">PROJECTS </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appmttos}
              title="Mobile application."
              description="Development of a mobile application for generating maintenance reports for equipment. 
              This application was created for personal use, allowing me to create and deliver service reports for biomedical
             equipment, the APP improved the efficiency of maintenance processes and accuracy in equipment management. 
              It was developed using Java in Android Studio."
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biomedica}
              title="University Projects."
              description="In university, I worked on simulation and prototype projects of biomedical equipment using Java, C, 
              MATLAB, and LabVIEW. These projects involved data and signal acquisition, digital processing of biomedical 
              images, and control of sensors and actuators to simulate the operation of biomedical devices."            
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="blue">PROFESSIONAL EXPERIENCE </strong>
        </h1>
        <p style={{ color: "gray" }}>
        <br/>
        <br/>
        <h5>
            <b className="blue">Tutor, KODLAND PTE. LTD</b>
            <br />
            ➢Currently, I am a tutor at Kodland, where I teach programming remotely to students. I lead courses on game development in Scratch, Roblox, as well as Python courses tailored to the assigned groups.
            <br />
            <br />

            <b className="blue">Biomedical Engineer, IB – INBIOCOL DE COLOMBIA LTDA.</b>
            <br />
            ➢ Developed a mobile application to generate maintenance reports for biomedical equipment using Java in Android Studio, improving maintenance process efficiency.
            <br />
            ➢ Provided biomedical engineering services to contracted hospitals and clinics.
            <br />
            ➢ Managed medical equipment databases and coordinated quality audits.
            <br />
            <br />

            <b className="blue">Senior Biomedical Support, PHARMACEUTICAL SUPPLY CHAIN SAS.</b>
            <br />
            ➢ Provided biomedical engineering services to contracted hospitals and clinics
            <br />
            ➢ Controlled the database of all equipment, supplies, and schedules.
            <br />
            ➢ Supported audit visits, ensuring compliance with regulatory standards
            <br />
            <br />

            <b className="blue">Biomedical Intern, VIRREY SOLIS IPS-MEDICALL.</b>
            <br />
            ➢ Supported the biomedical management process and control of the medical equipment database across IPS branches nationwide.
            <br />
            ➢ Performed preventive maintenance on medical equipment, ensuring optimal functionality.
            <br />
            <br />

            <b className="blue">Biomedical Technician, MARQUETINGNET S A S.</b>
            <br />
            ➢ Provide technical support, perform installations, carry out preventive and corrective maintenance on veterinary medical equipment.
            <br />
            <br />
        </h5>
        </p>

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
