import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform({ heading , mode, alert , showalert }) {

    const handleUpClick = () => {
        setText(Text.toUpperCase());
        showalert("Converted to Uppercase","success");
    }

    const handleLowClick = () => {
        setText(Text.toLowerCase());
        showalert("Converted to Lowercase","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const speak =()=>{
        const msg= new SpeechSynthesisUtterance(Text);  // CONVERTS STRING TO SPEECH OBJECT
        window.speechSynthesis.speak(msg);
    }

    const [Text, setText] = useState("");
    return (
        <>
        <div className="container mt-5" style={{color: mode=="dark"?"white":"dark"}}>
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" class="btn btn-primary ms-3" onClick={handleLowClick}>Convert to Lowercase</button>

            <button type="button" class="btn btn-primary ms-3" onClick={speak}>Speak</button>
            
        </div>

        <div className="container my-4" style={{color: mode=="dark"?"white":"dark"}}>
            <h2>Your Text Summary</h2>
            <p>{Text.trim().split(" ").length} words and {Text.trim().length} characters</p>
            <p>{Text.trim().split(" ").length*0.008} Minutes read</p>
            <h2>Preview</h2>
            <p>{Text}</p>
        </div>

        </>
    )
}
