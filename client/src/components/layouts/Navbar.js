import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../logo192.png'
function Navbar() {
    return (
        <Navbarc>
            <nav className="navbar navbar-expand-lg ">
  <Link className="navbar-brand" to="/">

    <img style={{width:'40px',}}src={logo} alt="logo" />
  </Link>

  <button className="navbar-toggler"
   type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false"
    aria-label="Toggle navigation">
  
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" 
  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/add">
       add blog
          </Link>
      </li>
      <li className="nav-item active">
    
          <Link className="nav-link" to="/">home</Link>     
                 </li>
      
    
    </ul>
   
  </div>
</nav>
        </Navbarc>
    )
}

export default Navbar

const Navbarc = Styled.div`
background: var(--dark-green);
.nav-link{
  color: #bbb !important;
  &:hover{
    background: var(--light-green)

  }
}

`