import './App.css';
import Navbar from './Components/Navbar'
import TypeFace_logo from './Components/TypeFace_logo'

let TermObj = {
  home: "Home",
  about: `About Us`,
  contact: "Contact Us"
}

function App() {
  return (
    <>
    <Navbar title = {<TypeFace_logo />} navOption1 = {TermObj.home} navOption2 = {<>About <TypeFace_logo /></>} navOption3 = {TermObj.contact}/>
    </>
  );
}

export default App;
