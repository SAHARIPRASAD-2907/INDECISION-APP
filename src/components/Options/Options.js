import React from "react";
import { Option } from "../Option/Option";

export function Options(props) {
  const options = props.options;
  return (
    <div>
      <h3>Options</h3>
      <ol>
        {options.map((e) => (
          <Option key={e} element={e} event={props.event} />
        ))}
      </ol>
    </div>
  );
}
