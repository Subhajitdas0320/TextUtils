import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        /* console.log("Uppercase was clicked" + text); */
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleDownClick = ()=>{
        /* console.log("Uppercase was clicked" + text); */
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange = (event)=>{
        /* console.log("On change"); */
        setText(event.target.value);
    }
    const handleOnClear = ()=>{
      setText("");
      props.showAlert("Text cleared", "success");
    }
    const copyText = ()=>{
      navigator.clipboard.writeText(text)
      props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('');
    //setText("NewText"); //To change the text
  return (
    <>
    <div className="container" style = {{color : props.mode === "dark" ? "white" : "#062655"}}>
       <h1 className="mb-4">{props.heading}</h1> 
      <div className="mb-3">
        <textarea className="form-control" value = {text}
        onChange={handleOnChange} style = {{backgroundColor : props.mode === "dark" ? "#13466e" : "white", color : props.mode === "dark" ? "white" : "#062655"}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled = {text.length === 0} className= "btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled = {text.length === 0} className= "btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <button disabled = {text.length === 0} className= "btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear</button>
      <button disabled = {text.length === 0} className= "btn btn-primary mx-1 my-1" onClick={copyText}>Copy</button>
      <button disabled = {text.length === 0} className= "btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style = {{color : props.mode === "dark" ? "white" : "#062655"}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s + /).filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(/\s + /).filter((element)=>{return element.length !== 0}).length} minutes used</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  );
}
