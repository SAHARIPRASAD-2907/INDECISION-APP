import React from "react";

export function Option(props) {
  const element = props.element;
  return (
    <div>
      <li key={element}>{element}</li>
      <button
        onClick={() => {
          props.event(element);
        }}
      >
        remove
      </button>
    </div>
  );
}
