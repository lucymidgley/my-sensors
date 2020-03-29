import React from 'react';
import "./data/sensors.json"
import logo from './logo.svg';
import './App.scss';
const readings = require("./data/readings.json")
const sensors = require("./data/sensors.json")

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {readings[0].time}
        {sensors[0].name}
      </header>
    </div>
  );
}

export default App;
