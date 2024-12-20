// import React from 'react'
// import ReactDom from 'react-dom/client'
// import { AppFunc } from './App'
// import { Button } from './components/Button'
// import { Input } from './components/Input'

// import { App } from './App'
// import { Card } from './components/Card'

// ReactDom.createRoot(element1).render(React.StrictMode(< div>
//   <h1>Hello World</h1>
//   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit officia quaerat ullam? Nemo natus non sit at esse ut doloribus, illum dolorem tenetur? Velit harum maiores unde tempora tenetur!</p>
//   <img  width={200}  src="public/vite.svg" alt="" />


// </div>))




// ReactDom.createRoot(element1).render(<AppFunc/>)
// const element1 = document.getElementById('root')

// ReactDom.createRoot(element1).render(<div>
//   <App/>
// </div>)


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap globally

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);