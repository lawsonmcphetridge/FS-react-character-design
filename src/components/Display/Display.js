import React, { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Slogan from '../Slogan/Slogan';
import './Display.css';

export default function Display() {
  const [head, setHead] = useState('mr-krabs-head');
  const [body, setBody] = useState('spongebob-shirt');
  const [shoes, setShoes] = useState('clown-shoes-1');
  const [headCount, headCountChanged] = useState(0);
  const [bodyCount, bodyCountChanged] = useState(0);
  const [shoesCount, shoesCountChanged] = useState(0);
  const [slogan, newSlogan] = useState('');
  const [sloganArr, setSloganArr] = useState([]); 
    
 
  const handleIncrement = (bodyPart) => {
    if (bodyPart === 'head') {
      headCountChanged((prevState) => prevState + 1);
    } else if (bodyPart === 'body') {
      bodyCountChanged((prevState) => prevState + 1);
    } else if (bodyPart === 'shoes') {
      shoesCountChanged((prevState) => prevState + 1);
    }
  };
    
  const addSlogan = () => {
    setSloganArr(prevSlogans => [...prevSlogans, slogan]);     
    newSlogan('');  
  };
  
  const changedCount = `you have changed the head ${headCount} times, you have changed the body ${bodyCount}times, and the legs ${shoesCount} times`;
    

    
  return (
    <div className="characterPreview">
          
      <Character
        head={head}
        body={body}
        shoes={shoes}
      />
          
      <Controls
        slogan={slogan}
        handleIncrement={handleIncrement}
        head={head}
        body={body}
        shoes={shoes}
        setHead={setHead}
        setBody={setBody}
        setShoes={setShoes}
        addSlogan={addSlogan}
        newSlogan={newSlogan}
      />
          
          
      <div className='changed-count'>{changedCount}</div>  
          
      <Slogan sloganArr={sloganArr} />
    </div>
  );
}
