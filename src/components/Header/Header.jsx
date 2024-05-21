import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import CardModal from '../Modal/Modal'


const Header = () => {
  return (
    <header>
        <div>
        
    <CardModal/>

            <h3>
                logo
            </h3>
        </div>
        <nav className="nav">
       <NavLink to='/'> home</ NavLink>
       <NavLink to='/Products'> Products</ NavLink>
      
        </nav>
    </header>
  )
}

export default Header