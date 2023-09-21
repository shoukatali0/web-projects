import React,{useState} from 'react'


export default function Tex_form(props) {

  const handleUpClick=()=>{
    // console.log("uppercase was clicked");
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

  }
  const handleOnChange=(event)=>{

    setText(event.target.value);
  }
 const handleClearClick=()=>{
  let newText="";
  setText(newText);
  props.showAlert("All text was removed", "success");

  
 }
const handleSenCaseClick=()=>{
  let newText=text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
  setText(newText);
  props.showAlert("Sentax case was updated", "success");

}
const handleCopyClick=()=>{
  let text= document.getElementById("myBox");
  text.select();
  props.showAlert("Copied to clipboard", "success");

  navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces=()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces handled", "success");


}
    const [text, setText]= useState('');
  return (
<>
  <div className>

  <div className="mb-3" style={{color : props.mode ==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
    <textarea
      className="form-control"
      style={{backgroundColor:props.mode === "dark" ? "black" : "white", color : props.mode ==='dark'?'white':'black' , border:"1px solid #1B03A3"}}
      id="myBox"
      rows={10}
      value={text}
      onChange={handleOnChange}
    ></textarea></div>
<button type="button" className="btn btn-primary" onClick={handleUpClick}>
  Covert to uppercase
</button>
<button type="button" className="btn btn-success mx-3" onClick={handleLowClick}>
convert to LowerCase</button>
<button type="button" className="btn btn-warning mx-3" onClick={handleSenCaseClick}>
Sentance Case</button>
<button type="button" className="btn btn-info mx-3 my-3" onClick={handleCopyClick}>
Copy</button>
<button type="button" className="btn btn-danger mx-3 my-3" onClick={handleExtraSpaces}>
Remove Extra Spaces</button>
<button type="button" className="btn btn-danger mx-3 my-3" onClick={handleClearClick}>
Clear All</button>


  </div>
  <div className="container my-3" style={{color : props.mode ==='dark'?'white':'black'}}>
    <h1>your text summery </h1>
    <p>{text.split(" ").length-1} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length} Minutes to read </p>
    <p>{text.length>0?text:"enter something to see the preview"}</p>

  </div>
</>
    
  )
}

