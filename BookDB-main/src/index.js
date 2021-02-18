import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookDetails from "./components/BookDetails";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div>
        <Route path="/" exact component={App} />
        <Route path="/book/:id" exact component={BookDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
