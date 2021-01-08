import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.createElement("DIV");
root.id = "root";

var cssId = "k238hdwd923h2323j23dshdsjdbks";
if (!document.getElementById(cssId)) {
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.id = cssId;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css";
  head.appendChild(link);
}

document.body.appendChild(root);

ReactDOM.render(<App />, document.querySelector("#root"));
