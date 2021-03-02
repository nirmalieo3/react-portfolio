import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle'
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutcard from "./AboutCard";


function About() {
  return (
    
    <Container fluid className="about-section style3">
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
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
         
          </Col>
        </Row>
        
    
      </Container>
     
    </Container>
  );
}

export default About;
