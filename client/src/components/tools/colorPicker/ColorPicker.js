import React, {useState, useEffect} from 'react';
import { SketchPicker} from 'react-color';
import rgbHex from 'rgb-hex';


function ColorPicker({value, setSelectedColor}) {
  const [backgroundRgb, setBackgroundRgb] = useState({r: 25, g: 7, b: 58, a: 100});
  const [backgroundHex, setBackgroundHex] = useState("#19073a");
  
  //handle color picked by the user, convert it to hex and save it in state
  const handleChangeComplete = (color) => {
    setBackgroundRgb(color.rgb);
    setBackgroundHex("#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));
  };
  
  //changing the selecedColor in Tools
  useEffect(() => {
    setSelectedColor(backgroundHex);  
  }, [backgroundHex, setSelectedColor]);

  console.log(backgroundRgb);

  return <div>
      <SketchPicker color={backgroundRgb} onChangeComplete={handleChangeComplete}/>
  </div>;
}

export default ColorPicker;
