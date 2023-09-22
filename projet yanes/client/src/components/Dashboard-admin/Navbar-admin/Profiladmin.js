
import React from 'react'
import Navbaradmin from './Navbaradmin'
import './Profiladmin.css'
import { Link } from 'react-router-dom'

const Profiladmin = () => {
  return (
    <div>
      <Navbaradmin />
      <div className='box-menu'>
<div className='menu'>
    <ul className='link'>
     <li><i class="fa-solid fa-address-card"></i><Link to="/dashbord"> Profil</Link></li>
        <li><i class="fa-solid fa-users"></i><Link to="/produits"> Gestion Produits</Link></li>
        <li><i class="fa-solid fa-paste"></i><Link to='/users'> Gestion users</Link></li>
        <li><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</li>
    </ul>
</div>
      <div class="blog_post">
  <div class="img_pod">
    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image" />
  </div>
  <div class="container_copy">
    <h3>is admin </h3>
    <h1>Nom et Prenom</h1>
  </div>
  
</div>
</div>
    </div>
  )
}

export default Profiladmin
