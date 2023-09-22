import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduit } from '../../JS/ProduitSlice/produitSlice'
import Card from './Card'
import "./Card.css"
import Navbar from '../Navbar/Navbar'

const List = () => {
    const dispatch=useDispatch()
    useEffect(() => {
   dispatch(getproduit())
    }, [])
    const produits=useSelector((store)=>store.produit?.produit)
    console.log(produits)
    const user=useSelector((store)=>store.user?.user)
    console.log(user)
  return (
    <div className='form'>
    <Navbar />
    <div className='list-product'>
      {produits?.map((el)=><Card  data={el} user={user}/>)}
    </div>
    </div>
  )
}

export default List
