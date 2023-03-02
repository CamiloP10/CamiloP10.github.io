import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Enfoque <strong className="blue">PROGRAMADOR</strong>
            </h1>
            <h4>
            Inicié con la programación en la universidad donde veía <b className="blue"> lógica de programación </b>  
            con enfoque hacia microcontroladores, utilizando plataformas y entornos de desarrollo 
            como <b className="blue"> MatLab </b> y <b className="blue"> LabView </b> desarrollé simulaciones y prototipos de diferentes equipos biomédicos, 
            en los cuales se realizaba toma y análisis de datos o señales por medio de sensores y según 
            los requerimientos se ejecutaban los actuadores.
            </h4>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
         <strong className="blue">Conocimientos y habilidades</strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
