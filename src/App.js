import React from "react";
import "./App.css";
import { Action } from "./components/Action/Action";
import { AddOptions } from "./components/AddOptions/AddOptions";
import { Header } from "./components/Header/Header";
import { Options } from "./components/Options/Options";

document.title = "INDECISION APP";

// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
      </div>
    );
  }
}

export default App;
