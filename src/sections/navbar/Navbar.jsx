import React from 'react'
import data from './data.js'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <ul className='nav_menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar