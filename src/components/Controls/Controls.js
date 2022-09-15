import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import './Controls.css';

export default function Controls({ head, body, shoes, setHead, setBody, setShoes, handleIncrement, slogan, newSlogan, addSlogan }) {
  return (
    <div className="controls">
          
      <div className="select-container">
              
        <Select className="select" value={head} onChange={(e) => {
          setHead(e.target.value);
          handleIncrement('head');
        }} >
                  
          <MenuItem value="mr-krabs-head">mr krabs</MenuItem>
          <MenuItem value="patrick-head">patrick</MenuItem>
          <MenuItem value="sponge-bob-head">sponge bob</MenuItem>
        </Select>
              
        <Select className="select" value={body} onChange={(e) => {
          setBody(e.target.value);
          handleIncrement('body');
        }} >
          <MenuItem value="spongebob-shirt">spongebob-shirt</MenuItem>
          <MenuItem value="squidward-shirt">squidward-shirt</MenuItem>
          <MenuItem value="pizza-shirt">pizza-shirt</MenuItem>
        </Select>
     

    
        <Select className="select" value={shoes} onChange={(e) => {
          setShoes(e.target.value);
          handleIncrement('shoes');
        }} >
          <MenuItem value="clown-shoes-1">shoes-1</MenuItem>
          <MenuItem value="clown-shoes-2">shoes-2</MenuItem>
          <MenuItem value="clown-shoes-3">shoes-3</MenuItem>
        </Select>
      </div>
      
     
        

      <TextField label="Add Slogan" variant="outlined" value={slogan} onChange={(e) => newSlogan(e.target.value)}></TextField>
      <Button class="button" variant="outlined" onClick={() => addSlogan()}> <AddCircleIcon /> </Button>
          
    </div>
      
  );
}
