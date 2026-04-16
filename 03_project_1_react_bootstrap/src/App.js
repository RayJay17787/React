import './App.css';
import Navbar from './Components/Navbar'
import TypeFace_logo from './Components/TypeFace_logo'
import TextForm from './Components/TextForm'


function App() {
  return (
    <>
    <Navbar title = {<TypeFace_logo />} navOption1 = {"Home"} navOption2 = {<>About <TypeFace_logo/></>} navOption3 = {"Contact Us"}/>
    <TextForm heading = "Enter Text To Analyze"/>








    </>
  );
}

export default App;
