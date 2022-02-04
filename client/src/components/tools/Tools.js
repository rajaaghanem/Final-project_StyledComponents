import React, {useState} from 'react';
import "./tools.css";
import ColorPicker from './colorPicker/ColorPicker';
import Button from '../button/Button';

function Tools() {
  const [selectedColor, setSelectedColor] = useState("#FFF");

  console.log("color in tools: " ,selectedColor);

  return (<div className='style-componant-page'>
    <div><ColorPicker value={selectedColor} setSelectedColor={setSelectedColor}/>
    <div><label>Width</label><input/></div>
    </div>
      
     <div><Button color={selectedColor}/></div> 
  </div>);
}

export default Tools;
