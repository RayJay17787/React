import React, {useState} from 'react'
import TypeFace_logo from './TypeFace_logo'


export default function TextForm({
    heading = "Default Heading Here"
})
{
    const [text, setText] = useState("Enter Text Here")
    
    const handleCapClick = () => { // One per functionality (Functionality is determined by an operation trigger by a button)
        console.log("Uppercase was used")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        console.log("Lowercase was triggered")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleTitClick = () => {
        console.log("Title case was triggered")
        let newText = text.charAt(0).toUpperCase() + text.slice(1)
        setText(newText)
    }

    const handleOnChange = (event) => { // One per text field
        console.log("On Change")
        setText(event.target.value)
    }

    // text = "TEXT IS HERE" -----> This is the wrong way!
    // setText("TEXT IS HERE") -----> This is the correct way!
    
    return (
        <div>
            <div className="container mt-5 mb-4 px-5">
                <h1 className='text-center'>{<>{heading} with <span style = {{color: "#0d6efd"}}><TypeFace_logo/></span></>}</h1>
                <div className="card px-5 mx-5" style={{border: "0"}}>
                    <span className="card-body px-5 mx-5">
                        <div className="mt-4 mb-4 px-5">
                            <div className="text-center mb-2">
                            <label htmlFor="myBox" className="form-label">Enter Your Text</label>
                            </div>
                            <textarea value={text} onChange={handleOnChange} className="form-control shadow-sm" id="myBox" rows="12"></textarea>
                        </div>
                        <div className="mx-5 d-flex justify-content-center gap-4">   
                        <button onClick={handleCapClick} className="btn btn-primary">Convert to Uppercase with {<TypeFace_logo/>}</button>
                        <button onClick={handleLowClick} className="btn btn-primary">Convert to Lowercase with {<TypeFace_logo/>}</button>
                        <button onClick={handleTitClick} className="btn btn-primary">Convert to Titlecase with {<TypeFace_logo/>}</button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

