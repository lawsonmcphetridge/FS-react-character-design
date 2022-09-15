import React from 'react';
import './Controls.css';
export default function Controls({ head, body, shoes, setHead, setBody, setShoes }) {
  return (
    <div>
          
      <div className="form-select-head">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="mr-krabs-head">mr-krabs-head</option>
          <option value="patrick-head">patrick-head</option>
          <option value="sponge-bob-head">sponge-bob-head</option>
        </select>
      </div>
      
      <div className="form-select-body">
        <select value={body} onChange={(e) => setBody(e.target.value)}>
          <option value="spongebob-shirt">spongebob-shirt</option>
          <option value="squidward-shirt">squidward-shirt</option>
          <option value="pizza-shirt">pizza-shirt</option>
        </select>
      </div>

      <div className="form-select-shoes">
        <select value={shoes} onChange={(e) => setShoes(e.target.value)}>
          <option value="shoes-1">clown-shoes-1</option>
          <option value="shoes-2">clown-shoes-2</option>
          <option value="shoes-3">clown-shoes-3</option>
        </select>
      </div>    


          
    </div>
  );
}
