//importing libraries
import React from "react";
import ReactDOM from "react-dom/client";

//importing the App(main) component
import App from "./components/App";

//creating a target variable to render the componets to DOM at id root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
