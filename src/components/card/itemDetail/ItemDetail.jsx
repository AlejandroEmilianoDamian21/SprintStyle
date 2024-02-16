import React from 'react'
import ImageCardDetail from '../ImageCard/ImageCardDetail'
import InformationCard from '../InformationCard/InformationCard'
import BottonCard from '../BottonCard/BottonCard'

const ItemDetail = ({id, name, img, category, description , price , stock}) => {
  return (
    <div>
    <ImageCardDetail  img={img} name={name}/>
    <InformationCard name={name} price={price} category={category} description={description}/>
    <BottonCard 
    initial={1} 
    stock={stock} 
    // onAdd={(quantity) =>console.log("Cantidad", quantity)} 
    />    
    </div>
  )
}

export default ItemDetail