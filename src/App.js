import React, { Component } from "react";
import AppRouter from './Routers/AppRouter';

import "./App.css";


class App extends Component {
  componentWillMount() {
    console.log("asa");
  }

  render() {
    return (
      <div className="App">
        <AppRouter/>
      </div>
    );
  }
}

export default App;
