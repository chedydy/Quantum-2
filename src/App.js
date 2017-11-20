import React, { Component } from "react";
import "./App.css";
import Navigator from "./Components/Navigator";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
class App extends Component {
  componentWillMount() {
    console.log("asa");
  }

  render() {
    return (
      <div className="App">
        <Navigator />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
