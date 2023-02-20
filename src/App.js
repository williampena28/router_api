import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Nav from './components/nav/index.js'
import { Outlet } from 'react-router-dom'

function App() {
  const testFunction = async () => {
    const response = await  fetch('/test_route');
    
  }
  testFunction()
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
    </div>
  );
}

export default App;