import React from 'react'
import rectangleStyle from '../assets/cssfile/Rectangle.module.css'

const Rectangle = ({classname}) => {
  return (
    <div className={`${classname}`} id={rectangleStyle.clipskew}></div>
  )
}

export default Rectangle