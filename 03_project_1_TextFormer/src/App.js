import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import TypeFace_logo from './Components/TypeFace_logo'
import TextForm from './Components/TextForm'
import About from './Components/About'
import Alert from './Components/Alert';


function App() {

  const [isSun, setIsSun] = useState(true)
  const [alert, setAlert] = useState(null)
  const [darkColor, setDarkColor] = useState('#3e3e42')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  useEffect(() => {
    document.body.style.backgroundColor = isSun ? 'white' : darkColor
  }, [isSun, darkColor])

  const toggleDefaultTheme = () => {
    setDarkColor('#3e3e42');
    if (!isSun) showAlert("Default Dark Theme Set", "success");
  };

  const toggleBlueTheme = () => {
    setDarkColor('#1f3864');
    if (!isSun) showAlert("Blue Dark Theme Set", "success");
  };

  const toggleGreenTheme = () => {
    setDarkColor('#00703c');
    if (!isSun) showAlert("Green Dark Theme Set", "success");
  };

  const toggleIcon = () => {
    setIsSun(!isSun)
    showAlert(`${!isSun ? "Light" : "Dark"} mode enabled`, 'success')
  }



  return (
    <div>
      <Navbar title={<TypeFace_logo />} navOption1="Home" navOption2={<>About <TypeFace_logo /></>} navOption3="Contact Us" isSun={isSun} toggleIcon={toggleIcon} toggleGreenTheme={toggleGreenTheme} toggleDefaultTheme={toggleDefaultTheme} toggleBlueTheme={toggleBlueTheme} alert={showAlert} />
      <Alert alert={alert} />
      <div className='container col-12 col-md-10'>
        {/* <TextForm toggleBlueTheme={toggleBlueTheme} toggleGreenTheme={toggleGreenTheme} toggleDefaultTheme={toggleDefaultTheme} showAlert={showAlert} isSun={isSun} heading="Enter Text To Analyze" bgColor={darkColor} color='white' /> */}
        <About isSun={isSun} color={{backgroundColor: darkColor, color: "white"}} />
      </div>
    </div>
  );
}

export default App;
