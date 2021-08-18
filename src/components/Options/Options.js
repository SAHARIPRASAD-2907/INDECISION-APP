import React from "react";
import { Option } from "../Option/Option";

export class Options extends React.Component {
  render() {
    const options = this.props.options;
    return (
      <div>
        <h3>Options</h3>
        <ol>
          {options.map((e) => (
            <Option element={e} />
          ))}
        </ol>
      </div>
    );
  }
}
