import React, { useState, useEffect } from 'react';
import 'w3-css/w3.css';
import Webcam from "react-webcam";
import ReactWebCamCapture from 'react-webcam-capture';

const CircleRecorder = (props) => {

  const [show, setShow] = useState(props.show);
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
    console.log(event)
  }

  function onStart(event){
    setRecording(true);
  }

  const webcam = <ReactWebCamCapture
    constraints={{ audio: true, video: true }}
    mineType="video/mp4"
    timeSlice={10}
    onStop={(e)=>{onStop(e)}}
    onStart={(e)=>{onStart(e)}}
    render={({ start, stop, pause, resume }) =>
          <div>
            { isRecording === true ?
              <div className="videoplayer">
                <button className="w3-button w3-red" onClick={stop}>Stop</button>
              </div>
              :
              <button className="w3-button w3-green" onClick={start}>Record</button>
            }
          </div>
    }
  />

  return(
    <div className="webcam">
      {webcam}
    </div>
  )
}

export default CircleRecorder;
