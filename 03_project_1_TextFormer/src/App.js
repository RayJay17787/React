import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import TypeFace_logo from './Components/TypeFace_logo'
import TextForm from './Components/TextForm'
import About from './Components/About'
import Alert from './Components/Alert';


function App() {
  const [isSun, setIsSun] = useState(true)
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleIcon = () => {
    if(isSun === true){
      document.body.style.backgroundColor = '#3e3e42'
      setIsSun(false)
      showAlert("Dark mode set successfully", "success")
    }
    else if(isSun === false){
      document.body.style.backgroundColor = 'white'
      setIsSun(true)
      showAlert("Light mode set successfully", "success")
    }
  }



  return (
    <div>
      <Navbar title={<TypeFace_logo />} navOption1="Home" navOption2={<>About <TypeFace_logo /></>} navOption3="Contact Us" isSun = {isSun} toggleIcon = {toggleIcon} alert = {showAlert}/>
      <Alert alert = {alert}/>
      <div className='container col-12 col-md-10'>
        <TextForm isSun = {isSun} heading="Enter Text To Analyze" bgColor = {"#3e3e42"} color = {'white'}/>
        {/* <About isSun={isSun} color={{backgroundColor: "#3e3e42", color: "white"}} /> */}
      </div>
    </div>
  );
}

export default App;
