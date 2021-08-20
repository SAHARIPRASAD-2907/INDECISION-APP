import React from "react";
import "./AddOption.css";
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
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleOption}>
          <input className="add-option__input" placeholder={"Enter data"} name="option" />
          <input type="submit" className="button" />
        </form>
      </div>
    );
  }
}
