import React from "react";
import { Option } from "../Option/Option";
import "./Options.css";

export function Options(props) {
  const options = props.options;
  return (
    <div>
      <ol>
        {options.map((e) => (
          <Option key={e} element={e} event={props.event} />
        ))}
      </ol>
    </div>
  );
}
