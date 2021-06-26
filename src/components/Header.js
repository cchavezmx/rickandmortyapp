import React from 'react'
import { useLocation } from 'react-router-dom'
import Search from './Search'
import logo from 'assets/media/logo.png'

const Header = () => {

  const location = useLocation()
  
  return(
    <div className="header--app">
      <div>
        <a href="/"><img src={logo} alt="logo de apliacion" className="logo--app" /></a>
      </div>
      
      <div>
          { location?.pathname === "/dashboard"  ? <Search /> : null }
      </div>
    </div>
  )
}

export default Header