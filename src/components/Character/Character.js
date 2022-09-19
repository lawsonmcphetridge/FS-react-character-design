import React from 'react';
import './Character.css';
export default function Character({ head, body, shoes }) {
  return (
    <div className='character'>
      <img className="head" src={`${process.env.PUBLIC_URL}/body-parts/${head}.png`} />
      <img className="body" src={`${process.env.PUBLIC_URL}/body-parts/${body}.png`} />
      <img className="shoes" src={`${process.env.PUBLIC_URL}/body-parts/${shoes}.png`} />
    </div>
  );
}
