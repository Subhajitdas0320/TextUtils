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
      var text_data = document.getElementById("myBox");
      text_data.select();
      navigator.clipboard.writeText(text_data)
      props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('Enter text here');
    //setText("NewText"); //To change the text
  return (
    <>
    <div className="container" style = {{color : props.mode === "dark" ? "white" : "#062655"}}>
       <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea className="form-control" value = {text}
        onChange={handleOnChange} style = {{backgroundColor : props.mode === "dark" ? "grey" : "white", color : props.mode === "dark" ? "white" : "#062655"}} id="myBox" rows="8"></textarea>
      </div>
      <button className= "btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className= "btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <button className= "btn btn-primary mx-1" onClick={handleOnClear}>Clear</button>
      <button className= "btn btn-primary mx-1 my-2" onClick={copyText}>Copy</button>
      <button className= "btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style = {{color : props.mode === "dark" ? "white" : "#062655"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes used</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
