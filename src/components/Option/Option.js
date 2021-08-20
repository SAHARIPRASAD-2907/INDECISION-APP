import React from "react";
import "./Option.css";

export function Option(props) {
  const element = props.element;
  return (
    <div className="option">
      <li key={element} className="option__text">{element}</li>
      <button
        className="button button--link"
        onClick={() => {
          props.event(element);
        }}
      >
        remove
      </button>
    </div>
  );
}
