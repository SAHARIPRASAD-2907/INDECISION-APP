import React from "react";
import { Action } from "../Action/Action";

export class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder={"Enter data"} />
          <button>Add data</button>
        </form>
      </div>
    );
  }
}
