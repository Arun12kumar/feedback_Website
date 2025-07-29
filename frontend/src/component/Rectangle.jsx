import React from 'react';
import rectangleStyle from '../assets/cssfile/Rectangle.module.css';

const Rectangle = ({ className }) => {
  return (
    <div className={`${className} ${rectangleStyle.clipskew}`}></div>
  );
};

export default Rectangle;