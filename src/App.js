import React, { Component } from "react";
import "./App.css";
import Navigator from "./Components/Navigator";

import Footer from "./Components/Footer";
import Main from "./Components/Main"
class App extends Component {
  componentWillMount() {
    console.log("asa");
  }

  render() {
    return (
      <div className="App">
        <Navigator />
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
