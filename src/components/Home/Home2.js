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
          <h3>
            Tengo gran afición al mundo Tecnológico, tanto 
            <b className="blue"> Frontend </b> como <b className="blue"> Backend </b>, 
            incluso programación de <b className="blue"> microcontroladores </b>. 
            <br/>
            Mis objetivos son aprender nuevas funciones sobre diferentes lenguajes de 
            programación y seguir investigando en temas relacionados con su uso en tecnología,
            para aplicar los conocimientos adquiridos en <b className="blue"> entornos empresariales 
            y nuevos proyectos </b>.
          </h3>
        </Col>
        <Col>
          <h2>
            <span className="blue"> Contacto: </span>
          </h2>
          <h2><span className="wave" role="img" aria-labelledby="wave"> 📧 </span> camilo4614@gmail.com</h2>
          <h2><span className="wave" role="img" aria-labelledby="wave"> 📞 </span> 320 386 3634</h2>
        </Col>
      </Row>

      <h1 style={{ fontSize: "2.6em" }}>
        <br/>
        <br/>
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
