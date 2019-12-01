import React from "react";
import logo from "./logo.svg";
import "./App.css";

function StringGenerator() {
  return "Some Random String";
}

function App() {
  let name = "Typescript String";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="test" onClick={() =>
          alert(StringGenerator())}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is a {name}, which cannot be changed to a number. And doing so
          will cause an error! Isn't that amazing?
        </p>
        <p>
          Having Functions define a return type isn't a bad idea! "
          {StringGenerator()}"
        </p>
        <p>
          Just one Difficult Task, Integrating with Redux Store is going to be a
          problem!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
