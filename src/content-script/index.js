import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.createElement("DIV");
root.id = "root";
root.style = `
position: absolute;
bottom:0px;
left: 0px;`;

document.body.appendChild(root);

ReactDOM.render(<App />, document.querySelector("#root"));
