import React, { useEffect, useState } from 'react'
import './Gestion.css'
import Navbaradmin from './Navbaradmin'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, getuser, updateuser } from '../../../JS/userSlice/userSlice'

const Gestionserveur = () => {
  const dispatch=useDispatch()
  const [ping, setping] = useState(true)
  const [update, setupdate] = useState(false)
  useEffect(() => {
dispatch(getuser())
  }, [ping])
  const users=useSelector((store)=>store.user?.user)
  const [newuser, setnewuser] = useState({
    name:"",
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
      <div class="leaderboard">
  <header>
    <h1 class="leaderboard__title"><span className="leaderboard__title--top">List of</span><span class="leaderboard__title--bottom">users</span></h1>
  </header>
  
  <main className="leaderboard__profiles">
    {users?.map((el)=>(
    <div class="leaderboard__profile">
      <img src={el?.avatar} alt="Mark Zuckerberg" class="leaderboard__picture"/>
      <span class="leaderboard__name">{el?.name}</span>
      <span class="leaderboard__value">
      <i class="fa-solid fa-trash fa-l" style={{color:"red"}} onClick={()=>(dispatch(deleteuser(el._id)),setping(!ping))}></i>
      <i class="fa-solid fa-pen-to-square " style={{color:"orange"}} onClick={()=>setupdate(true)} ></i>
      {update?(<><input type='text' placeholder={el.name} onChange={(e)=>setnewuser({name:e.target.value})}/><button onClick={()=>(dispatch(updateuser({id:el._id,user:newuser})),setping(!ping))}>OK</button></>):null}
      </span>
    </div>
    ))}
  </main>
</div>
    </div>
    </div>
  )
}

export default Gestionserveur
