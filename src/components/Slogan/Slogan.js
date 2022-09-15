import React from 'react';
import './Slogan.css';
export default function Slogan({ slogans }) {
  return (
    <div className="slogans">
      {slogans.map((slogan) => (
        <p key={slogan}>{slogan}</p>
      ))}   
    </div>
  );
}
