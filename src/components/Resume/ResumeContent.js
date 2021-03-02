import React from "react";
import Button from "react-bootstrap/Button";
function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <h5 className={props.subject ? "resume-title" : "resume-no-title"}>
        {props.subject}
      </h5>
      <a href={props.link} target="_blank">
        {props.link}
      </a>
      <h5 className={props.content ? "resume-title" : "resume-no-title"}>{props.content}</h5>
      
    </div>
  );
}

export default ResumeContent;
