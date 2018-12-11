import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // catList: [
      //   'Oakley',
      //   'Milla',
      //   'Whisper',
      //   'Neo'
      // ],
      catToys: {
        Oakley: ["string", "bookmarks", "ice", "daddy's face"],
        Milla: ["drool"],
        Whisper: ["string"],
        Neo: ["the couch"]
      }
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Let's Practice Some Routing</h1>
      </div>
    );
  }
}

export default App;
