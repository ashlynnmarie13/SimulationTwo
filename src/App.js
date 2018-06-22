import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import routes from "./routes";
import { HashRouter as Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
