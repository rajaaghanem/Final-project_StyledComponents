import React, { useState, useEffect } from "react";
import { HuePicker } from "react-color";
import rgbHex from "rgb-hex";

function BorderColor({setSelectedBorderColor, selectedBorderColor}) {

  const [borderColorHex, setborderColorHex] = useState(selectedBorderColor);
  const [borderColorRgb, setborderColorRgb] = useState({});


  //convert the rgba color to hex and save it in state
  const handleChangeComplete = (color) => {
    setborderColorRgb(color.rgb);
    setborderColorHex("#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));
  };

  //changing the selecedColor in Tools
  useEffect(() => {
    setSelectedBorderColor(borderColorHex);
  }, [borderColorHex, setSelectedBorderColor]);


  return (
    <div>
      <HuePicker width="209px" color={borderColorRgb} onChangeComplete={handleChangeComplete}/>
    </div>
  );
}

export default BorderColor;
