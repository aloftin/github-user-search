import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <input
          className="user-search"
          type="text"
          placeholder="Search for a username"
        />
      </div>
    );
  }
}

export default App;
