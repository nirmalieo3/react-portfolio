import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from '../Particle'
import "./style.css";
import mob2 from "../../Assets/Projects/mob2.png";
import mob1 from "../../Assets/Projects/mob1.png";
import img4 from "../../Assets/Projects/img4.png";
import mob5 from "../../Assets/Projects/mob5.png";
import mob3 from "../../Assets/Projects/mob3.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <div class="center">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="p">
          Here are a few projects I've worked on recently.
        </p>
      </div>
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob2}
              title="Webpack-app"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              link="https://nirmalieo3.github.io/webpack-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob1}
              title="Json-app"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              link="https://nirmalieo3.github.io/json-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob3}
              title="Angular-App"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              link="https://mrs-nirmalie-s-ict-class.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob5}
              title="Lab for food Delivery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              link="https://nirmalieo3.github.io/FoodDeliveryLab/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              title="Colma Academy"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              link="https://nirmalieo3.github.io/ColmaAcademy/"
            />
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;