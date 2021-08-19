import React from "react";
export function Action(props) {
  return (
    <div>
      <button disabled={props.checkOptions} onClick={props.event}>
        {props.text}
      </button>
    </div>
  );
}
