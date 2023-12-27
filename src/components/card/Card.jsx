import React from 'react'
import ImageCard from './ImageCard/ImageCard.jsx'
// import BottonCard from './BottonCard/BottonCard.jsx'
import InformationCard from './InformationCard/InformationCard.jsx'
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