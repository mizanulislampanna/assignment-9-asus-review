import React from "react";
import "./Answers.css";

const Answers = (props) => {
  const { name, details } = props.data;
  return (
    <div className="answer-container">
      <h2>{name}</h2>
      <p>{details}</p>
    </div>
  );
};

export default Answers;
