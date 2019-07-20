import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'w3-css/w3.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CircleComponent from './components/CircleComponent';
import Webcam from "react-webcam";

function App() {

  const percentage = 60;

  return (
    <div className="app">
      <div className="logo w3-display-topright">
        <img className="logo-img" alt="Logo" src="https://gitlab.com/uploads/-/system/group/avatar/5080466/Logo_Transparent.png" />
      </div>
      <div className="title w3-center">
        <h1 className="w3-display-topleft" style={{color: 'white', margin: '0px 0px 0px 10px'}}>2Good2BTrue</h1>
        <Webcam style={{marginTop: '20px'}} width={770} height={578} />
      </div>
      <div className="w3-display-bottommiddle" style={{width: '920px'}}>
        <CircleComponent />
        <CircleComponent />
        <CircleComponent />
      </div>
    </div>
  );
}

export default App;
