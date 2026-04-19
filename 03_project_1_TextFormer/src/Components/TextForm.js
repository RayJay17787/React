import React, { useState } from 'react'
import TypeFace_logo from './TypeFace_logo'


export default function TextForm({
    heading = "Default Heading Here",
    color = "white",
    bgColor = 'black',
    isSun = true,
    showAlert = null,
    toggleBlueTheme = true,
    toggleDefaultTheme = true,
    toggleGreenTheme = true
}) {
    const [text, setText] = useState("")

    const handleCapClick = () => { // One per functionality (Functionality is determined by an operation trigger by a button)
        console.log("Uppercase was used")
        let newText = text.toUpperCase();
        setText(newText)
        showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        console.log("Lowercase was triggered")
        let newText = text.toLowerCase()
        setText(newText)
        showAlert("Converted to Lowercase", "success")
    }

    const handleTitClick = () => {
        console.log("Titlecase was triggered")
        let lowText = text.slice(1).toLowerCase()
        let newText = text.charAt(0).toUpperCase() + lowText
        setText(newText)
        showAlert("Converted to Titlecase", "success")
    }

    const handleClearText = () => {
        console.log("Text Cleared")
        setText("")
        showAlert("Cleared Text", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // text = "TEXT IS HERE" -----> This is the wrong way!
    // setText("TEXT IS HERE") -----> This is the correct way!

    return (
    <div style={{color: isSun ? 'black' : 'white'}}> 
        <div className="container mt-5 mb-4">
            <h1 className='text-center px-md-6'>
                {heading} with <span style={{ color: isSun ? "#0d6efd" : "#007acc" }}><TypeFace_logo /></span>
            </h1>

            <div className="card px-md-5 mx-md-5" style={{ backgroundColor: isSun ? 'white' : bgColor, border: "0" }}>
                <div className="card-body">
                    <div className="mt-4 mb-4 px-md-5">
                        <div className="text-center mb-2">
                            <label htmlFor="myBox" className="form-label" style={{color: isSun ? "black" : "white"}}>
                                Enter Your Text
                            </label>
                        </div>
                        <textarea 
                            style={{backgroundColor: isSun ? 'white' : '#f8f9fa', color: 'black'}} 
                            value={text} 
                            onChange={handleOnChange} 
                            className="form-control shadow-sm" 
                            id="myBox" 
                            rows="12"
                        ></textarea>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center gap-2 px-md-6 mb-4">
                        <button onClick={handleCapClick} className={`btn ${isSun ? 'btn-primary' : 'btn-dark'} w-auto`}>
                            Convert to Uppercase with <TypeFace_logo />
                        </button>
                        <button onClick={handleLowClick} className={`btn ${isSun ? 'btn-primary' : 'btn-dark'} w-auto`}>
                            Convert to Lowercase with <TypeFace_logo />
                        </button>
                        <button onClick={handleTitClick} className={`btn ${isSun ? 'btn-primary' : 'btn-dark'} w-auto`}>
                            Convert to Titlecase with <TypeFace_logo />
                        </button>
                        <button onClick={handleClearText} className={`btn ${isSun ? 'btn-primary' : 'btn-dark'} w-auto`}>
                            Clear all text with <TypeFace_logo />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-5 mb-4 px-md-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                    <h1 className="text-center mt-3">Your Text Summary</h1>
                    <div className="d-flex flex-wrap justify-content-center gap-5 mt-md-4">
                        <p>{text.split(/\s+/).filter((el) => el.length !== 0).length} words</p>
                        <p>{text.length} characters</p>
                        <p>Time to read: {0.008 * text.split(/\s+/).filter((el) => el.length !== 0).length} minutes</p>
                    </div>
                    <div className="mt-3 px-md-10">
                        <textarea 
                            style={{backgroundColor: isSun ? 'white' : '#f8f9fa', color: 'black'}} 
                            value={text} 
                            className="form-control shadow-sm" 
                            rows="4" 
                            readOnly
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}