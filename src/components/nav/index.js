import React from 'react'
import { Link } from 'react'
import './index.css'

const Nav = () => {
  return (
    <nav id="nav">
      <Link to='/'><button>Home Page</button></Link>
      <Link to='/about'><button>About</button></Link>
      <Link to='/dashboard'><button>Dashboard</button></Link>
    </nav>
  )
}

export default Nav