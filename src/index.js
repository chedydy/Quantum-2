import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./Components/Custom.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import authService from "./Services/AuthService";

authService.checkAuthState().then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  registerServiceWorker();
});

