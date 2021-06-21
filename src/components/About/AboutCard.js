import React from "react";
import Card from "react-bootstrap/Card";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{background: "linear-gradient(89deg, #c740ac 0%, #2baebd 100%)"}}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color:"black" }}>
            Hi Everyone, I am  <span className="purple">Warnakulasuriya Nirmalie </span> 
             live in <span className="purple">Rome Italy .</span>
            <br />I am a Fornt end developer.
            <br />
            <br />
            I have a good knowledge of Html5, CSS, Java Script, Angular8+, React Js,
            Webpack, Bootstrap, Particle Js, Node Js, and Git.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{color: "black" }}>
            <li > Styding new features</li>
            <li > Playing Games </li>
            <li>Travelling </li>
            <li > Teaching </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "black" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer style={{color: "black" }} className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
