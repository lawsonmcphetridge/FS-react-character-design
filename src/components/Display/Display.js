import React, { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import './Display.css';

export default function Display() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [shoes, setShoes] = useState('');


  return (
    <div className="characterPreview">
      <Character head={head} body={body} shoes={shoes} />
      <Controls head={head} body={body} shoes={shoes} setHead={setHead} setBody={setBody} setShoes={setShoes}/>
      {/* <div>{`you have changed the head ${headChanged} times, you have changed the body ${bodyChanged}times, and the legs ${legsChanged} times`}</div>
      <div>{oldSlogans}</div>     */}
    </div>
  );
}
