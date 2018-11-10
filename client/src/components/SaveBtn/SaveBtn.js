import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <div className="save-btn" {...props}>
    {props.word} Shuffle the Cards
  </div>
);

export default SaveBtn;
