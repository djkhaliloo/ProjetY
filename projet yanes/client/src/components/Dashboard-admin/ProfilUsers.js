import React, { useEffect, useState } from 'react'
import  './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { userCurrent } from '../../JS/userSlice/userSlice'
import Navbaradmin from './Navbar-admin/Navbaradmin'
import { Link } from 'react-router-dom'
import { addproduit, deleteproduit, getproduit } from '../../JS/ProduitSlice/produitSlice'

const ProfilUsers = () => {
  const dispatch=useDispatch()
  const [ping, setping] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
dispatch(getproduit())
  }, [ping])
  const produits=useSelector((store)=>store.produit?.produit)
  const [newprod, setnewprod] = useState({
    name:"",
    price:"",
    description:"",
    photo:""
  })

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

 <div className="modal-container">
  <input id="modal-toggle" type="checkbox" />
  <i class="fa-solid fa-plus fa-xl" style={{color:"green"}} ></i>
   
  <div class="modal-backdrop">
    <div class="modal-content">
      <label class="modal-close" for="modal-toggle">x</label>
      <input type='text' placeholder='name'onChange={(e)=>setnewprod({...newprod,name:e.target.value})}/>
      <input type='number' placeholder='Price'onChange={(e)=>setnewprod({...newprod,price:e.target.value})}/>
      <input type='text' placeholder='Photo'onChange={(e)=>setnewprod({...newprod,photo:e.target.value})}/>
      <input type='text' placeholder='Description'onChange={(e)=>setnewprod({...newprod,description:e.target.value})}/>

      <button onClick={()=>(dispatch(addproduit(newprod)),setping(!ping))}>ok</button>
      <label className="modal-close button" for="modal-toggle">Close</label>
    </div>
  </div>
</div>

       <div className="table">
                
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Photo</th>
                        <th>Description</th>
                        <th>Actions</th>
                        
                    </tr> 
                    {produits?.map((el)=>(
                    <tr>
                        <td> {el?.name} </td>
                        <td>{el?.price} </td>
                        <td><img src={el?.photo} /> </td>
                        <td>{el?.description} </td>
                        <td>
                                                <i class="fa-solid fa-trash fa-xl" style={{color:"red"}} onClick={()=>(dispatch(deleteproduit(el._id)),setping(!ping))}></i></td>

                    </tr>
                 ))}
            
     </div>

    </div>
    
   
 
    </div>
  )
}

export default ProfilUsers
                          