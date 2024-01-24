import React from 'react'
import Card from '../Card'
import '../../../index.css'

const ItemListContainer  = ({greeting}) => {
  return (
    <>
    <h1 className='block text-2xl font-bold text-center'>{greeting}</h1>
    <div className='cardsContainer' >
    <Card className= 'cardPosition'  stock={2}/>
    <Card className= 'cardPosition' stock={10}/>
    <Card className= 'cardPosition' stock={10}/>
    <Card className= 'cardPosition' stock={1}/>
    </div>
    </>
  )
}

export default ItemListContainer 