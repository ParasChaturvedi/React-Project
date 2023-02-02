import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../src/Tab.css';
import {BrowserRouter} from "react-router-dom"
import Main from "./Main";

ReactDOM.render(
  <>
  <BrowserRouter>
  <Main />
  </BrowserRouter>
  </>,
  document.getElementById("root")
);


