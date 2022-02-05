import React from "react";
import "./tools.css";
import ColorPicker from "./colorPicker/ColorPicker";
import BorderColor from "./borderColor/BorderColor";
import ShadowColor from "./shadowColor/ShadowColor";

function Tools({
  selectedColor,
  setSelectedColor,
  componentSize,
  setComponentSize,
  selectedBorderColor,
  setSelectedBorderColor,
  selectedBoreder,
  setSelectedBoreder,
  boxShadow,
  setBoxShadow,
  selectedShadowColor,
  setSelectedShadowColor
}) {


  //handle box-shadow h-offset, v-offset and blur fields
  const handleBoxShadow = (e) => {
    const field = e.target.name;
    const newBoxShadow = {
      ...boxShadow,
      [field]: e.target.value,
    };
    setBoxShadow(newBoxShadow);
  };

  //handle border width and style and border-radius fields
  const handleBorderChange = (e) => {
    const field = e.target.name;
    const newBorder = {
      ...selectedBoreder,
      [field]: e.target.value,
    };
    setSelectedBoreder(newBorder);
  };

  //handle component width, height, margina nd padding
  const handleComponentSize = (e) => {
    const field = e.target.name;
    const newComponentSize = {
      ...componentSize,
      [field]: e.target.value,
    };
    setComponentSize(newComponentSize);
  };

  console.log("selectedBoreder", selectedBoreder);

  return (
    <>
      <div className="style-componant-page">
        <div>
          <div className="component-background_container">
            <h3>BACKGROUND</h3>
          <ColorPicker
            value={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          </div>
          <div className="component-size_container">
            <h3>SIZE</h3>
            <div>
              <label>Width</label>
              <input
                value={componentSize.componentWidth}
                name="componentWidth"
                onChange={handleComponentSize}
              />
            </div>
            <div>
              <label>Height</label>
              <input
                value={componentSize.componentHeight}
                name="componentHeight"
                onChange={handleComponentSize}
              />
            </div>
            <div>
              <label>Padding</label>
              <input
                value={componentSize.componentPadding}
                name="componentPadding"
                onChange={handleComponentSize}
              />
            </div>
            <div>
              <label>Margin</label>
              <input
                value={componentSize.componentMargin}
                name="componentMargin"
                onChange={handleComponentSize}
              />
            </div>
          </div>
          <div className="component-border_container">
            <h3>BORDER</h3>
            <div className="component-border-color">
              <label>Border Color</label>
              <BorderColor setSelectedBorderColor={setSelectedBorderColor} />
            </div>
            <div className="component-width">
              <label>Border Width</label>
              <input
                value={selectedBoreder.borderWidth}
                name="borderWidth"
                onChange={handleBorderChange}
              />
            </div>
            <div className="component-style">
              <label>Border Style</label>
              <select
                value={selectedBoreder.borederStyle}
                name="borederStyle"
                onChange={handleBorderChange}
              >
                <option value="none">none</option>
                <option value="solid">solid</option>
                <option value="double">double</option>
                <option value="dotted">dotted</option>
                <option value="groove">groove</option>
                <option value="ridge">ridge</option>
                <option value="inset">inset</option>
                <option value="outset">outset</option>
              </select>
            </div>
            <div className="component-border-radius">
              <label>Border Radius</label>
              <input
                value={selectedBoreder.borderRadius}
                name="borderRadius"
                onChange={handleBorderChange}
              />
            </div>
          </div>
          <div className="component-border_container">
            <h3>BOX SHADOW</h3>
            <div className="component-border-color">
              <label>Shadow Color</label>
              <ShadowColor  setSelectedShadowColor={setSelectedShadowColor}/>
            </div>
            <div className="component-style">
              <label>h-offset</label>
              <input
                value={boxShadow.hOffSet}
                name="hOffSet"
                onChange={handleBoxShadow}
              />
            </div>
            <div className="component-style">
              <label>v-offset</label>
              <input
                value={boxShadow.vOffSet}
                name="vOffSet"
                onChange={handleBoxShadow}
              />
            </div>
            <div className="component-style">
              <label>Blur</label>
              <input
                value={boxShadow.blur}
                name="blur"
                onChange={handleBoxShadow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
