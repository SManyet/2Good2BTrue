import React, { useState, useEffect } from 'react';
import 'w3-css/w3.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Webcam from "react-webcam";
import ReactWebCamCapture from 'react-webcam-capture';


const CircleComponent = () => {

  const [percentage, setPercentage] = useState(49);
  const [isRecorded, setRecorded] = useState(false);
  const [isRecording, setRecording] = useState(false);
  const [videoFile, setVideoFile] = useState();

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  function onStop(event){
    setRecording(false);
    setRecorded(true);
    console.log(event)
  }

  function onStart(event){
    setRecording(true);
  }

  const webcam = <ReactWebCamCapture
    constraints={{ audio: true, video: true }}
    mineType="video/mp4"
    timeSlice={30}
    onStop={(e)=>{onStop(e)}}
    onStart={(e)=>{onStart(e)}}
    render={({ start, stop, pause, resume }) =>
          <div>
          { isRecorded === false ?
            isRecording === true ?
              <div className="videoplayer">
                <button className="w3-button w3-red" onClick={stop}>Stop</button>
              </div>
              :
              <button className="w3-button w3-green" onClick={start}>Record</button>
            :
            <div> </div>
          }
          </div>
    }
  />

  return(
    <div className="progress-bar-controller w3-third" style={{width: '300px', margin: '0px 5px 32px 0px'}}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          strokeLinecap: 'butt',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: `rgb(${percentage > 50 ? 244 : 76}, ${percentage <= 50 ? 175 : 67}, ${percentage <= 50 ? 80 : 54})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      >
      {webcam}
        {percentage >= 50 ?
          <div className="children">
            <img style={{ width: 128, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
            <div style={{ fontSize: 32, marginTop: -5 }}>
              <strong>{percentage}</strong>%
            </div>
          </div>
          :
          <div className="children">
            <div style={{ fontSize: 32, marginTop: -5 }}>
              <strong>{percentage}</strong>%
            </div>
          </div>
         }
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default CircleComponent;
