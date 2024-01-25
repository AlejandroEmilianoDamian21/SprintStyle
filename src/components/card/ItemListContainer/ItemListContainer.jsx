import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card'
import {getProducts , getProductCategory} from '../../../api/asyncMock'
import '../../../index.css'

const ItemListContainer  = ({greeting}) => {

  const [products , setProducts] = useState([]);
  
  const {categoryId} = useParams()

  useEffect(()=>{
    
    const asyncFunc = categoryId ? getProductCategory : getProducts

    asyncFunc(categoryId)
      .then(response =>{
        setProducts(response)
      })
      .catch(err => {
        console.log(err)
      })
  }, [categoryId])

  return (
    <>
    <h1 className='block text-2xl font-bold text-center'>{greeting}</h1>
    <div className='cardsContainer ' >
    <Card products={products} /> 
    </div>
    </>
  )
}

export default ItemListContainer 