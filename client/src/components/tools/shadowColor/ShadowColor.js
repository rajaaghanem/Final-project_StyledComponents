import React, { useState, useEffect } from "react";
import { HuePicker } from "react-color";
import rgbHex from "rgb-hex";

function ShadowColor({setSelectedShadowColor}) {

  const [borderColorHex, setborderColorHex] = useState("#005affff");
  const [borderColorRgb, setborderColorRgb] = useState({r: 255, g: 255, b: 255, a: 1});


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


  return (
    <div>
      <HuePicker width="209px" color={borderColorRgb} onChangeComplete={handleChangeComplete}/>
    </div>
  );
}

export default ShadowColor;
