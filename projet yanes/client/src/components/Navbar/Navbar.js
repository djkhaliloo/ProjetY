import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navbars'>
      <Link to="/"> <img  src='./images/logo.png' /></Link> 
        <ul className= "nav-menu">  
      <li className="nav-item">
         <Link to="/profil"><i class="fa-solid fa-user fa-2x">
        </i>  </Link>
         </li>
      <li className="nav-item"> 
      <Link to="/list"> <i class="fa-solid fa-cart-shopping fa-2x">
        </i></Link>
        </li> 
        <li className="nav-item"> 
      <Link to="/dashbord"> <i class="fa-solid fa-building-shield"></i></Link></li>

    </ul>
    </div>
  )
}

export default Navbar
 