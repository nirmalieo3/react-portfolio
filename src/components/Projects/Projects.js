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
import la from "../../Assets/Projects/la.png";


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
              imgPath={la}
              title="Laravel-app"
              description="This is the Laravel course project That I did with LabForTraining.
                  For this project I used Mysql database.Also used Infyom to create tables and modules. "
              link="https://sheltered-forest-76465.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob2}
              title="Webpack-app"
              description="I followed Odin Projects to create this App using Webpack.
              When using webpack, index.js file in src folder and index.html file in dist folder
              has been created. Webpack config.js file also created. Contents of each tab kept inside
              of it's own module which exports a function.
              This function creates a div element that appends to the DOM. "
              link="https://nirmalieo3.github.io/webpack-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob1}
              title="Json-app"
              description="This App was created recently when I was following Java Script course
              at LabFor Trainning Institution in Rome. I made a Json file as a database in another Github repository
              and used get request to fetch data from the json file."
              link="https://nirmalieo3.github.io/json-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob3}
              title="Angular-App"
              description="This is my first Angular App created using Angular 8. I used this app to teach students in the high school.
              Angular material and bootstrap also used for this app. Scrimba online tutorial and Udemi online course has been helpful for creating
              this App."
              link="https://mrs-nirmalie-s-ict-class.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mob5}
              title="Lab for food Delivery"
              description="This App has been created recently for my Front end web development course with LabFor Trainnig in Rome.
              I used Google map to get the location of restaurents. Also used jQuery fancy box to create the food galary.
              Using vanila Java Script shopping cart has been created. "
              link="https://nirmalieo3.github.io/FoodDeliveryLab/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              title="Colma Academy"
              description="This App was created using Codecademy online tutorials. This is the capstone project for responsive web design in Codecademy.
              I used css flex box in this project. I also used media query to make the app responsive."
              link="https://nirmalieo3.github.io/ColmaAcademy/"
            />
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;