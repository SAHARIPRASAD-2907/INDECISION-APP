import React from "react";

export class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleOption = this.handleOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.action(option);
    e.target.elements.option.value = "";
    this.setState(() => {
      return {
        error: error,
      };
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOption}>
          <input placeholder={"Enter data"} name="option" />
          <input type="submit" />
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
