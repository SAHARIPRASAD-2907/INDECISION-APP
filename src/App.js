import React from "react";
import "./App.css";
import { Action } from "./components/Action/Action";
import { AddOptions } from "./components/AddOptions/AddOptions";
import { Header } from "./components/Header/Header";
import OptionModal from "./components/OptionModal/OptionModal";
import { Options } from "./components/Options/Options";

document.title = "INDECISION APP";

// eslint-disable-next-line
class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: [],
      selected: undefined,
    };
  }
  //Just when application start
  componentDidMount() {
    try {
      console.log("fetching data");
      const json = localStorage.getItem("options");
      const Newoptions = JSON.parse(json);
      if (Newoptions) {
        this.setState(() => {
          return {
            options: Newoptions,
          };
        });
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  //Changes when there are amy updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }
  //Just before something is removed from DOM
  componentWillUnmount() {
    console.log("something removed");
  }
  //Pick what you want to do
  handlePick = () => {
    const len = this.state.options.length;
    const pick = Math.floor(Math.random() * len);
    this.setState(() => ({
      selectOption: this.state.options[pick],
    }));
  };
  //handle clear selected option
  handleModalClose = () => {
    this.setState(() => ({ selectOption: undefined }));
  };
  //Remove one element
  removeOne = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return !(option === optionToRemove);
        }),
      };
    });
  };
  //Remove all elements
  removeAll = () => {
    console.log("Remove All");
    this.setState(() => {
      return {
        options: [],
      };
    });
  };
  //Adding one option to do
  addOption = (option) => {
    if (!option) {
      return "Enter a valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
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
    //Props for button's
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
        {this.state.options.length === 0 && <p>Please add options to start</p>}
        <Options options={this.state.options} event={this.removeOne} />
        <AddOptions action={this.addOption} />
        <OptionModal
          selectOption={this.state.selectOption}
          closeModal={this.handleModalClose}
        />
      </div>
    );
  }
}

const App1 = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default App;
