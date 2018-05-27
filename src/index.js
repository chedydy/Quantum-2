import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Components/Custom.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { AuthService } from "./Services";

AuthService.checkAuthState().then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  registerServiceWorker();
});
