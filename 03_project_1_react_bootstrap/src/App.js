import './App.css';
import Navbar from './Components/Navbar'
import TypeFace_logo from './Components/TypeFace_logo'


function App() {
  return (
    <>
    <Navbar title = {<TypeFace_logo />} navOption1 = {"Home"} navOption2 = {<>About <TypeFace_logo/></>} navOption3 = {"Contact Us"}/>
    </>
  );
}

export default App;
