import React, { useState, useEffect } from "react";
import { HuePicker } from "react-color";
import rgbHex from "rgb-hex";

function ShadowColor({setSelectedShadowColor}) {

  const [borderColorHex, setborderColorHex] = useState("#808080");
  const [borderColorRgb, setborderColorRgb] = useState({r: 128, g: 128, b: 128, a: 100});


  //convert the rgba color to hex and save it in state
  const handleChangeComplete = (color) => {
    setborderColorRgb(color.rgb);
    setborderColorHex("#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));
  };

  //changing the selecedColor in Tools
  useEffect(() => {
    setSelectedShadowColor(borderColorHex);
  }, [borderColorHex, setSelectedShadowColor]);


  return (
    <div>
      <HuePicker width="209px" color={borderColorRgb} onChangeComplete={handleChangeComplete}/>
    </div>
  );
}

export default ShadowColor;
