import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
// Nav gives an 'element type is invalid: expected a string' error when the <Link> tag is implemented into the nav component
// So I will manually create buttons that link to our other routes
// import Nav from './components/nav/index.js'
import { Outlet, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {
  
  return (
    <div className="App">
      <nav id='nav'>
        <h1>Router App</h1>
        <div className='nav-buttons'>
          <Link to='/'><button id='button'>Home Page</button></Link>
          <Link to='/about'><button id='button'>About</button></Link>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;