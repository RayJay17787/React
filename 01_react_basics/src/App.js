import logo from './logo.svg';
import './App.css';

function Button(){
  return(
  <div>
  <h4><center>Button Below</center></h4>
  <a href='https://www.facebook.com' target='_blank'><button>This is a button</button></a>
  </div>
  )
}

function Heading(){
  return(
    <h1>This is a React App</h1>
  )
}

function App() {
  let myName = "Rayyan"
  return (
    <div>
      <div className="blank">
      <header className='App-header'>
        <nav className='navbar'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign In</li>
        </nav>
        <img src={logo} className='App-logo'/>
        <h1 className='nameHeading'>Hello, {myName}</h1>
        <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolores neque voluptatibus dicta quaerat qui reiciendis culpa. Quis nihil ex, laboriosam consequatur id ullam? Aperiam deleniti explicabo nam nihil quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis maxime ullam quas ab voluptates molestiae dicta atque facilis tenetur, expedita accusantium deleniti ipsam placeat fuga vitae officiis ipsum illum iste facere ducimus totam vel eius omnis. Eius nihil perferendis, quia distinctio voluptatibus deserunt blanditiis, voluptatum hic explicabo architecto laborum.
        </div>
      </header>
      </div>
    </div>
  );
}

export default App;

{/* <div className="App">
      <header className="App-header">
        <Heading />
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
        {/*<h1>Hello {myName}, Welcome To React!</h1>
        <Button />
      </header>
    </div> */}
