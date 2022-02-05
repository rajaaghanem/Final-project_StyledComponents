import React, {useState, useEffect} from 'react';
import { SketchPicker} from 'react-color';
import rgbHex from 'rgb-hex';


function ColorPicker({value, setSelectedColor}) {
  const [backgroundRgb, setBackgroundRgb] = useState({r: 255, g: 255, b: 255, a: 1});
  const [backgroundHex, setBackgroundHex] = useState("#FFF");
  
  //handle color picked by the user, convert it to hex and save it in state
  const handleChangeComplete = (color) => {
    setBackgroundRgb(color.rgb);
    setBackgroundHex("#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));
  };
  
  //changing the selecedColor in Tools
  useEffect(() => {
    setSelectedColor(backgroundHex);  
  }, [backgroundHex, setSelectedColor]);
  

  // console.log("background in colorpicker", backgroundRgb);
  // console.log("background in colorpicker", backgroundHex);


  return <div>
      <SketchPicker color={backgroundRgb} onChangeComplete={handleChangeComplete}/>
  </div>;
}

export default ColorPicker;
