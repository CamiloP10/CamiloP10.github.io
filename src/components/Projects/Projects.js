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
          <strong className="blue">Trabajos realizados </strong>
        </h1>
        <p style={{ color: "white" }}>
          Proyectos y trabajos realizados recientemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pag}
              title="Página web."
              description="Desarrollo de página web para una distribuidora de belleza, con
              opción de registro, login de vendedores, actualización de inventario
              y ventas, página creada utilizando node.js, react y base de datos en
              MySQL."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appmttos}
              title="APP móvil."
              description="Desarrollo de aplicación móvil para generar reportes de
              mantenimiento de equipos, aplicación creada para uso personal en
              donde creo y entrego los reportes de servicios realizados a equipos
              biomédicos, creada con java en Android Studio."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biomedica}
              title="Proyectos Universidad"
              description="Diseño y desarrollo de simulaciones y prototipos de diferentes
              equipos biomédicos, realizando toma y análisis de datos y señales
              por medo de sensores para ejecutar los actuadores según los
              requerimientos del equipo"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
