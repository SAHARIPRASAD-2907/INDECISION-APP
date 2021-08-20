import React from "react";
import "./Action.css";
export function Action(props) {
  return (
    <div>
      <button
        className={props.style}
        disabled={props.checkOptions}
        onClick={props.event}
      >
        {props.text}
      </button>
    </div>
  );
}
