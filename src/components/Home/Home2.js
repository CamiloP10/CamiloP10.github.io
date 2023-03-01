import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoUMB from "../../Assets/logoUMB.png";
import logoUNAB from "../../Assets/logoUNAB.png";
import logoSENA from "../../Assets/logoSENA.png";

function Home2() {
  return (
    <Container fluid className="home-about-description" id="about">
      <Row>
        <Col>
        col1
        </Col>
        <Col>
          <h3>
            <span className="blue"> Contacto: </span>
          </h3>
        </Col>

      </Row>
      <b/>
      <h1 style={{ fontSize: "2.6em" }}>
        <span className="blue"> ESTUDIOS </span>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> Ingeniería biomédica. </h1></b>
          </i>
          <img src={logoUMB} className="img-fluid" alt="avatar" width="100" height="100" />
          <h4> Universidad Manuela Beltrán </h4>
        </Col>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> Técnico laboral en programación </h1></b>
          </i>
          <img src={logoUNAB} className="img-fluid" alt="avatar" width="250" height="250" />
          <h4> MINTIC-Universidad Autónoma de Bucaramanga </h4>
        </Col>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> Técnico mantenimiento de equipos de cómputo </h1></b>
          </i>
          <img src={logoSENA} className="img-fluid" alt="avatar" width="100" height="100" />
          <h4> SENA </h4>
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
