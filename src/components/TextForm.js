import React, {useState} from 'react'

export default function TextForm(props) {
    const[text , setText] = useState("Enter text here");

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText  = ()=>{
        let newText = '';
        setText(newText);
         
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!" , "success");
         
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
         
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>Enter text to analyze</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder='Enter text here' style={{backgroundColor : props.mode==='dark'?'#212529':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" value={text}   onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-1 `} onClick={handleLowClick} > Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-1 `} onClick={handleUpClick} > Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-1`} onClick={clearText} > Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-1`} onClick={handleCopy} > Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-1`} onClick={handleExtraSpace} > Clear Extra Space</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
        
    )
}
