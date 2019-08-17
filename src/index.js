import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
import Route from "routing";
import "./styles.css";

const Root = ({ store }) => {
  return <Provider store={store}>{Route}</Provider>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root store={store} />, rootElement);
