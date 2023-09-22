import React, { useEffect, useState } from 'react'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux'
import { addcommande, getcommande } from '../../JS/CommandeSlice/commandeSlice'

const Card = ({data,user}) => {
  const dispatch=useDispatch()
  const [newcommande, setnewcommande] = useState({
    product:data,
    details:user
  })
  useEffect(() => {
dispatch(getcommande())
  }, [])
  
  const commande=useSelector((store)=>store.commande?.commande)
  console.log(commande)
  return (
      <>
        
        <div class="container">
<div className="card">
  <div className="card-image">
    <img src={data.photo} />
  </div>
  
  <div className="card-text">
    <p className="card-meal-type">{data.name}</p>
    <h2 className="card-title">Délicieux Bénédicte</h2>
    <p className="card-body">{data.description}</p>
  </div>
  <div className='box'>
  <div className="card-price">{data.price}DT</div>
  <button className='container1' onClick={()=>dispatch(addcommande(newcommande))}><i class="fa-solid fa-cart-shopping  fa-2x">
        </i></button>
  </div>
 </div>
</div>
</>

  )
}

export default Card
