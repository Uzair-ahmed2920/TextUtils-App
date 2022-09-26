import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.alert("Coverted to lower case");
  };
  const handleLowClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.alert("Coverted to lower case");
  };
  const handleText = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("write something");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            style={{backgroundColor: props.mode==='dark'?'gray':'white' ,color: props.mode==='dark'?'white':'black' }}
            onChange={handleText}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Upercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="cotainer my-3 mx-2 " style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>Summary of Text</h1>
          <h5>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} character</h5>
          <h5>{0.008 * Text.split(" ").length} minutes to read</h5>
          <h2>Preview</h2>
          <p><b>{Text}</b></p>
      </div>
    </>
  );
}
