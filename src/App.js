import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
// Nav gives an 'element type is invalid: expected a string' error when the <Link> tag is implemented into the nav component
// import Nav from './components/nav/index.js'
import { Outlet, Link } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <nav id='nav'>
        <h1>Nav Bar</h1>
        <Link to='/'><button>Home Page</button></Link>
        <Link to='/about'><button>About</button></Link>
        <Link to='/dashboard'><button>Dashboard</button></Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;