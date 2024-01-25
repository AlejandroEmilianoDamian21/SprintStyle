import React from 'react'

const ImageCardDetail = ({name , img}) => {
  return (
    <div className='w-full '>
    <img  className='w-full rounded ' alt={name} src={img} />
  </div>
  )
}

export default ImageCardDetail