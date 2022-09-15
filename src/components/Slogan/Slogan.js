import React from 'react';
import './Slogan.css';

export default function Slogan({ sloganArr }) {
  const sloganItems = sloganArr.map((slogan, i) => (
    <p key={i}>{slogan}</p>
  ));
    
  return (
    <div className="slogans">
      {sloganItems}       
    </div>
  );
}
