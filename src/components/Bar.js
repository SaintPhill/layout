import React from 'react'
import './MainCss.css'
import { Link } from 'react-router-dom'

const Bar = () => {
  return (
    <div className='bar_wrapper'>
      <div className="w3-bar w3-black">
        <a className="w3-bar-item bar_title">Brand</a>
        <Link to='/'><a href="#" className="w3-bar-item w3-button w3-mobile">Home</a></Link>
        <Link to='/profile'><a href="#" className="w3-bar-item w3-button w3-mobile">Profile</a></Link>
        <Link to='/messages'><a href="#" className="w3-bar-item w3-button w3-mobile">Messages</a></Link>
      </div>
    </div>
  )
}

export default Bar