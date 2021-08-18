import React from "react";

export class Option extends React.Component {
  render() {
    const element = this.props.element;
    return (
      <div>
        <li key={element}>{element}</li>
      </div>
    );
  }
}
