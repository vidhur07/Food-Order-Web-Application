import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Get the best deals on your favourite dishes</p>
        <a href='#explore-menu'><button >View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
