import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect( () => {
    getGifs(setImages, category)
  }, [category])
  

  return (
    <div>
      <h3>{ category }</h3>
      <div className="card-grid">
        {
          images.map(img => {
            return <GifGridItem key={img.id} {...img} />
          })
        }
      
      </div>
    </div>
  )
}
