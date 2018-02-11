import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Reducers";
import AppRouter from "./Routers/AppRouter";
import "./App.css";

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
