import React from 'react'
import { Link } from 'react'
import './index.css'

const Nav = () => {
  return (
    <nav id="nav">
      <Link to='/about'><button>About</button></Link>
      <Link to='/stock'><button>Dashboard</button></Link>
    </nav>
  )
}

export default Nav