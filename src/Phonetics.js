import React from "react";

export default function Phonetics(props){

    // console.log(props.phonetics);
    return (
        <div className= "Phonetics">
            <a href={props.phonetics.audio} target="_blank">Listen</a> <span> {props.phonetics.text}</span>
            
        </div>
    )
}