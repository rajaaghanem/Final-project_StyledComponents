import React, {useState, useEffect} from 'react';
import {CompactPicker} from 'react-color';
import rgbHex from 'rgb-hex';

function CompactColorShadow({setSelectedShadowColor}) {
  const [borderColorHex, setborderColorHex] = useState("#808080");
  const [borderColorRgb, setborderColorRgb] = useState({r: 128, g: 128, b: 128, a: 100});


  //convert the rgba color to hex and save it in state
  const handleChangeComplete = (color) => {
    setborderColorRgb(color.rgb);
    setborderColorHex("#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));
  };

  //changing the selecedColor in Tools
  useEffect(() => {
    console.log("border", borderColorHex);
    setSelectedShadowColor(borderColorHex);
  }, [borderColorHex, setSelectedShadowColor]);

  return <div>
      <CompactPicker className="compact-picker" color={borderColorRgb} onChangeComplete={handleChangeComplete}/>
  </div>;
  
}

export default CompactColorShadow;
