import React from 'react'
import ImageCard from './ImageCard/ImageCard.jsx'
import BottonCard from './BottonCard/BottonCard.jsx'
import InformationCard from './InformationCard/InformationCard.jsx'
import '../../index.css'

const Card = ({stock}) => {
  return (
    <div className='card'>
    <ImageCard />
    <InformationCard />
    <BottonCard initial={1} stock={stock} onAdd={(quantity) =>console.log("Cantidad", quantity)} />    
    </div>
  )
}

export default Card