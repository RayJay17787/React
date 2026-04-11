import logo from './logo.svg';
import './App.css';

function Button(){
  return(
  <div>
  <h4><center>Button Below</center></h4>
  <button>This is a button</button>
  </div>
  )
}

function App() {
  let myName = "npm Rayyan"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          <code>Edit src/App.js and save to reload.</code>
        </p>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my first React App
        </a> */}
        <h1>Hello {myName}, Welcome To React!</h1>
        <Button />
      </header>
    </div>
  );
}

export default App;
