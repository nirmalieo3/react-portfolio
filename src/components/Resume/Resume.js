import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Resumecontent from "./ResumeContent";
import "./resume.css";
import "bootstrap/dist/css/bootstrap.min.css";



function Resume() {
   
  return (
    <Container fluid className="resume-section">
     
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
         
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title tit">Recent Projects</h3>
            <Resumecontent
              title="Json Project:" 
              subject= "using a Json file from external website get data. : 2020"
            
              link= "https://nirmalieo3.github.io/json-app/"
            
            />
             <Resumecontent
              title="Food Delivery Lab" 
              subject= " Jquery, Google Map, Java Script has been used"
              date="2020"
              link= "https://nirmalieo3.github.io/FoodDeliveryLab/"
            
            />
             <Resumecontent
              title="Library app" 
              subject= "DOM manipulation has been used to create App : 2020"
          
              link= " https://nirmalieo3.github.io/library-app/"
            
            />
            <Resumecontent
              title="Anguar app" 
              subject= "Angular8, angular material and bootstrap has been used: 2019"
          
              link= " https://mrs-nirmalie-s-ict-class.web.app/"
            
            />
           
             <Resumecontent
              title="React App  2019" 
              subject= "  Use React Js and Udemi online course to create"
        
              link= "https://nirmalieo3.github.io/firstapp/"
            
            />
               
             <h3 className="resume-title tit">Employment History</h3>
            <Resumecontent
              title="ICT, Computer Science Teacher" 
              subject= "subjects: IGCSE ComputerScience , IGCSE ICT"
              content="Italian State Schools : 2019 - 2020"
              />     
               <Resumecontent
              title="President and Teacher" 
              subject= "subjects: Algebra, Trigonometry, Precalculus, Chemistry, Physics"
              content="Ave Maria Cultural Institute, Via Tiburtino33, Rome : 2019 - 2020"
              />   
               <Resumecontent
              title="Maths and Science teacher" 
              subject= "subjects: Matematics and Science"
              content= " Via Fabrizio Chiari, 31 Rome: 2002 - 2019"
              />                           
          </Col>
         
          <Col md={6} className="resume-right">
          <h3 className="resume-title tit">Languages and Technologies</h3>
            <Resumecontent
              title="JavaScript, React Js, Angular8+, Css, Html5, Github, Node Js, Jquery, Webpack, 
              Responsive webdesign, Microsoft Office, Visual Studio Code"
              subject= "Italian, English"
            />        
            <h3 className="resume-title tit">Education</h3>
            <Resumecontent
              title="LabFor Trainnig Institute: Via Pasquale Revoltella,85 "
              subject="Front End Web Development Course:  2020 - Present"
                       
            />
            <Resumecontent
              title="Bacholor of Science: University of Kelaniya SriLanka"
              content="1983 - 1986"
            />
            <Resumecontent
              title="Marawila Convent Advance Level"
              subject=" Subjects: Chemistry, Physics, Biology: 1981 - 1982"
            />
         <h3 className="resume-title tit">Certificates</h3>
            <Resumecontent
              title="Front-End Developer 2019 Career Course Udemy - 2020"
             
            />    
             <Resumecontent
              title="Front-End Developer 2019 Career Course Udemy - 2020"
            />    
              <Resumecontent
              title="University of Cambridge Certificate in Advanced English - 2010"
            />    
              
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
