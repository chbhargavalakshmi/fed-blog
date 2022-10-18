import React from "react";
import "./Content.css";

function Content(props) {
  return (
    <div className="main-content">
      <h1 className="heading">{props.heading}</h1>
      <strong>{props.text_imp}</strong>
      <p>{props.paragraph_one}</p>
      <p>{props.paragraph_two}</p>
      <div className="Note">{props.note}</div>
    </div>
  );
}

export default Content;
