import React from "react";
import "./App.css";
import { Action } from "./components/Action/Action";
import { AddOptions } from "./components/AddOptions/AddOptions";
import { Header } from "./components/Header/Header";
import { Options } from "./components/Options/Options";

document.title = "INDECISION APP";

// eslint-disable-next-line
class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: [],
    };
  }
  handlePick = () => {
    const len = this.state.options.length;
    const pick = Math.floor(Math.random() * len);
    alert(this.state.options[pick]);
  };
  removeAll = () => {
    console.log("Remove All");
    this.setState(() => {
      return {
        options: [],
      };
    });
  };
  addOption = (option) => {
    
    if (!option) {
      return "Enter a valid value to add item";
    }else if(this.state.options.indexOf(option)>-1){
      return "This option already exists"
    }
    this.setState((e) => {
      return {
        options: e.options.concat(option),
      };
    });
    
  };
  render() {
    //Props for title and subtitle
    const title = "INDECISION APP";
    const subTitle = "Put your life in the hands of a computer";
    const selectOptionButton = "What should I do?";

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        {/* //Choose option */}
        <Action
          text={selectOptionButton}
          event={this.handlePick}
          checkOptions={!(this.state.options.length > 0)}
        />
        {/* //Remove Al */}
        <Action
          text={"remove All"}
          event={this.removeAll}
          checkOptions={!(this.state.options.length > 0)}
        />
        <Options options={this.state.options} />
        <AddOptions action={this.addOption} />
      </div>
    );
  }
}

export default App;
