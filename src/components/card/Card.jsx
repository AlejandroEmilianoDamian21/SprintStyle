import React from 'react'
import ImageCard from './imageCard/ImageCard.jsx'
import BottonCard from './bottonCard/BottonCard.jsx'
import InformationCard from './informationCard/InformationCard.jsx'
import '../../index.css'

const Card = () => {
  return (
    <div className='card'>
    <ImageCard />
    <InformationCard />
    </div>
  )
}

export default Card