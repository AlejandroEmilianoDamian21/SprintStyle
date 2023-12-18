import React from 'react'
import Card from '../Card'
import '../../../index.css'

const CardContent = () => {
  return (
    <div className='cardsContainer '>
    <Card className= 'cardPosition ' />
    <Card className= 'cardPosition '/>
    <Card className= 'cardPosition'/>
    <Card className= 'cardPosition'/>
    </div>
  )
}

export default CardContent