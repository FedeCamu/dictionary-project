import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props){

    // console.log(props.phonetics);
    return (
      <div className="Phonetics">
        <ReactAudioPlayer src={props.phonetics.audio} controls />{" "}
        <span> {props.phonetics.text}</span>
      </div>
    );
}