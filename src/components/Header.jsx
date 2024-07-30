import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'


const Header = () => {
  return (
  <header>
    <div className='logo'>
      <img src="/recipe-finder/App-logo.png" alt="" />
      <h1 className='title'>Recipe Finder</h1>
    </div>
    <nav>
      <Link to='/' className='link'><li>Home</li></Link>
      <Link to='favourite' className='link'><li>Favourites</li></Link>
    </nav>
  </header>
  )
}

export default Header
