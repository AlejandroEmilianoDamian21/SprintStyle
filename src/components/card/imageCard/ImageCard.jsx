import React from 'react'

const ImageCard = ({name , img}) => {
  console.log(img);
  return (
    <div className='w-full '>
      <img  className='w-full rounded h-full max-h-72' alt={name} src={img} />
    </div>
  )
}

export default ImageCard