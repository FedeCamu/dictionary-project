import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  // console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <div className="row align-items-center mb-3">
        <div className="col-4">
          <ReactAudioPlayer
            src={props.phonetics.audio}
            controls
            className="player"
          />
        </div>
        <div className="col-4 text text-start">{props.phonetics.text}</div>
      </div>
    </div>
  );
}
