import React from "react";
export class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={this.props.checkOptions} onClick={this.props.event}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
