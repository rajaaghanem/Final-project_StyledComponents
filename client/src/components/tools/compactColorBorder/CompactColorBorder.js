import React, {useState, useEffect} from 'react';
import {CompactPicker} from 'react-color';
import rgbHex from 'rgb-hex';
import "./compactPicker.css";

function CompactColorBorder({setSelectedBorderColor}) {
  const [borderColorHex, setborderColorHex] = useState("#FFFFFF");
  const [borderColorRgb, setborderColorRgb] = useState({});


  //convert the rgba color to hex and save it in state
  const handleChangeComplete = (color) => {
    setborderColorRgb(color.rgb);
    setborderColorHex("#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));
  };

  //changing the selecedColor in Tools
  useEffect(() => {
    console.log("border", borderColorHex);
    setSelectedBorderColor(borderColorHex);
  }, [borderColorHex, setSelectedBorderColor]);

  return <div>
      <CompactPicker className="compact-picker" color={borderColorRgb} onChangeComplete={handleChangeComplete}/>
  </div>;
}

export default CompactColorBorder;
