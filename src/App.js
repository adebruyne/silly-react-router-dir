import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router, // Watches for changes to URL
  Route // Renders components based on the specific URL
  //Link                     // Changes the URL so the Router sees it
} from "react-router-dom";

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
