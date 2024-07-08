import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoUMB from "../../Assets/logoUMB.png";
import logoUNAB from "../../Assets/logoUNAB.png";
import logoCTI from "../../Assets/logoCTI.png";

function Home2() {
  return (
    <Container fluid className="home-about-description" id="about">
      <Row>
        <Col>
          <h3>
            I am passionate about <b className="blue">technology</b> and <b className="blue">software development</b>
            with a focus on problem-solving and creating efficient solutions.
            <br/>
            <br/>
            I have a strong academic background in <b className="blue">computer science</b> and <b className="blue">biomedical science</b>,
            and I have acquired technical skills and knowledge that allow me to tackle a variety of <b className="blue">technological challenges</b>.
          </h3>
        </Col>
        <Col>
          <h2>
            <span className="blue"> CONTACT </span>
          </h2>
          <h2><span className="wave" role="img" aria-labelledby="wave"> 📧 </span> camilo4614@gmail.com</h2>
          <h2><span className="wave" role="img" aria-labelledby="wave"> 📞 </span> +57 320 386 3634</h2>
          <h2><span className="wave" role="img" aria-labelledby="wave"> 📞 </span> +61 423 866335</h2>
        </Col>
      </Row>

      <h1 style={{ fontSize: "2.6em" }}>
        <br/>
        <br/>
        <span className="blue"> EDUCATION </span>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> Bachelor of Science in Biomedical Engineering. </h1></b>
          </i>
          <img src={logoUMB} className="img-fluid" alt="avatar" width="100" height="100" />
          <h4> Universidad Manuela Beltrán </h4>
        </Col>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> College degree in programming </h1></b>
          </i>
          <img src={logoUNAB} className="img-fluid" alt="avatar" width="250" height="250" />
          <h4> MINTIC-Universidad Autónoma de Bucaramanga </h4>
        </Col>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> Diploma of IT Cybersecurity </h1></b>
          </i>
          <img src={logoCTI} className="img-fluid" alt="avatar" width="100" height="100" />
          <h4> Canterbury Technical Institute  - currently studying </h4>
        </Col>
      </Row>
      <h1 style={{ fontSize: "2.6em" }}>
        <br/>
        <span className="blue"> LANGUAGES </span>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> Spanish </h1></b>
          </i>
          <h4> Native </h4>
        </Col>
        <Col xs={1} md={1} className="tech-icons">
          <i>
            <b className="blue"> <h1> English </h1></b>
          </i>
          <h4> High </h4>
        </Col>
      </Row>
    </Container>
    
  );
}
export default Home2;
